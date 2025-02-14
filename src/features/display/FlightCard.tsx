import { Itinerary } from "@/types/flight";
import { Clock, DollarSign } from "lucide-react";

export const FlightCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  itinerary: Itinerary;
}> = ({ title, icon, itinerary }) => {
  const leg = itinerary.legs[0];
  const carrier = leg.carriers.marketing[0];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-blue-600">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Flight Route */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-gray-700 font-medium">
            {leg.origin.city} ({leg.origin.displayCode}) →{" "}
            {leg.destination.city} ({leg.destination.displayCode})
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(leg.departure).toLocaleString()} -{" "}
            {new Date(leg.arrival).toLocaleString()}
          </p>
        </div>

        {/* Duration & Stops */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Clock className="text-gray-500" size={18} />
            <p className="text-gray-600">
              {Math.floor(leg.durationInMinutes / 60)}h{" "}
              {leg.durationInMinutes % 60}m
            </p>
          </div>
          <span className="text-sm text-gray-500">{leg.stopCount} Stop(s)</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* Airline */}
          <div className="flex items-center gap-2">
            <img
              src={carrier.logoUrl}
              alt={carrier.name}
              className="w-10 h-10 object-contain rounded-md"
            />
            <p className="text-gray-700 font-medium">{carrier.name}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-1">
            <DollarSign className="text-green-500" size={18} />
            <p className="text-green-600 font-semibold">
              {itinerary.price.formatted}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
