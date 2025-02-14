import React from "react";
import { PlaneTakeoff, PlaneLanding } from "lucide-react";
import { FlightSearchResponse, Itinerary } from "@/types/flight";
import { FlightCard } from "./FlightCard";

type Props = {
  departure: FlightSearchResponse;
  returnFlight?: FlightSearchResponse;
};

const DisplayComponent: React.FC<Props> = ({ departure, returnFlight }) => {
  const getBestItinerary = (
    flightData: FlightSearchResponse
  ): Itinerary | null => {
    return flightData?.data?.itineraries?.[0] || null;
  };

  const departureItinerary = getBestItinerary(departure);
  const returnItinerary = returnFlight ? getBestItinerary(returnFlight) : null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Flight Results
      </h2>

      {/* Destination Image */}
      {departure.data.destinationImageUrl && (
        <div className="mb-6">
          <img
            src={departure.data.destinationImageUrl}
            alt="Destination"
            className="w-full h-40 md:h-60 object-cover rounded-md"
          />
        </div>
      )}

      {/* Departure Flight */}
      {departureItinerary && (
        <FlightCard
          title="Departure Flight"
          icon={<PlaneTakeoff />}
          itinerary={departureItinerary}
        />
      )}

      {/* Return Flight (If available) */}
      {returnItinerary && (
        <FlightCard
          title="Return Flight"
          icon={<PlaneLanding />}
          itinerary={returnItinerary}
        />
      )}
    </div>
  );
};

export default DisplayComponent;
