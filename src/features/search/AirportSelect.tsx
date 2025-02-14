import AsyncSelect from "react-select/async";
import { searchAirport } from "@/services/airpotService";
import { Airport, AirportSearchResponse } from "@/types/airport";

interface AirportSelectProps {
  label: string;
  onAirportSelect: (airport: Airport) => void;
}

export const AirportSelect: React.FC<AirportSelectProps> = ({
  label,
  onAirportSelect,
}) => {
  const loadOptions = async (inputValue: string) => {
    if (!inputValue) return [];
    try {
      const response: AirportSearchResponse = await searchAirport({
        query: inputValue,
        locale: "en-US",
      });
      return response.data.map((airport) => ({
        value: airport.entityId,
        label: `${airport.presentation.title} (${airport.skyId})`,
        airport,
      }));
    } catch (error) {
      console.error("Failed to fetch airports:", error);
      return [];
    }
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      placeholder={`Select ${label}`}
      onChange={(selectedOption) =>
        selectedOption && onAirportSelect(selectedOption.airport)
      }
      className="w-full sm:min-w-[220px] flex-grow"
      styles={{
        control: (provided) => ({ ...provided, minHeight: "48px" }),
      }}
    />
  );
};
