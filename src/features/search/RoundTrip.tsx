import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import React, { useState } from "react";

type Trip = "round-trip" | "one-way";

const tripOptions: Trip[] = ["round-trip", "one-way"];

type Props = {
  tripType?: Trip;
  onTripChange?: (trip: Trip) => void;
};

export const RoundTrip: React.FC<Props> = ({ tripType, onTripChange }) => {
  const [selectedTrip, setSelectedTrip] = useState<Trip>(
    tripType || "round-trip"
  );
  const handleTripChange = (val: Trip) => {
    setSelectedTrip(val);
    onTripChange?.(val);
  };
  return (
    <div className="flex items-center space-x-2">
      <ArrowRightLeft size={"1rem"} />
      <Select onValueChange={handleTripChange} value={selectedTrip}>
        <SelectTrigger className="outline-none ring-transparent">
          <span>
            {selectedTrip === "round-trip" ? "Round Trip" : "One Way"}
          </span>
        </SelectTrigger>
        <SelectContent>
          {tripOptions.map((trp) => (
            <SelectItem key={trp} value={trp}>
              {trp === "round-trip" ? "Round Trip" : "One Way"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
