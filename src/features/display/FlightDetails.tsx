import React from "react";
import { FlightSearchResponse } from "@/types/flight";

type Props = {
  data: FlightSearchResponse;
};

const FlightDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-2 p-3 border rounded-lg bg-white shadow-sm text-left">
      <p className="text-gray-600">
        <strong>Session ID:</strong> {data.sessionId}
      </p>
      <p className="text-gray-600">
        <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()}
      </p>
      {/* Add more flight details as needed */}
    </div>
  );
};

export default FlightDetails;
