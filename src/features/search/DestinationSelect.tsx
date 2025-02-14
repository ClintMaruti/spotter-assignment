import { Airport } from "@/types/airport";
import { AirportSelect } from "./AirportSelect";
import { ArrowRightLeft } from "lucide-react";

interface DestinationSelectProps {
  setOrigin: (airport: Airport) => void;
  setDestination: (airport: Airport) => void;
}

export const DestinationSelect: React.FC<DestinationSelectProps> = ({
  setOrigin,
  setDestination,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full">
      <AirportSelect label="Select Origin" onAirportSelect={setOrigin} />

      <div className="hidden md:flex items-center justify-center">
        <ArrowRightLeft className="text-gray-500 rounded-full border border-gray-300 p-2 w-8 h-8" />
      </div>

      <AirportSelect label="Where to?" onAirportSelect={setDestination} />
    </div>
  );
};
