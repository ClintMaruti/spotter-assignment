import GlobeLogo from "@/assets/globe.jpg";
import DisplayComponent from "@/features/display/Display";
import { Search } from "@/features/search/Search";
import { FlightSearchResponse } from "@/types/flight";
import { useState } from "react";

export const Home = () => {
  const [departureData, setDepartureData] =
    useState<FlightSearchResponse | null>(null);
  const [returnData, setReturnData] = useState<FlightSearchResponse | null>(
    null
  );

  const handleResults = (
    departure: FlightSearchResponse,
    returnFlight?: FlightSearchResponse
  ) => {
    setDepartureData(departure);
    setReturnData(returnFlight || null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <div className="mb-6 flex justify-center">
        <img
          src={GlobeLogo}
          alt="globe logo"
          className="w-auto max-h-60 object-cover rounded-md"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">Flights</h1>
      <Search handleResults={handleResults} />
      {departureData && (
        <div className="mt-8">
          <DisplayComponent
            departure={departureData}
            returnFlight={returnData || undefined}
          />
        </div>
      )}
    </div>
  );
};
