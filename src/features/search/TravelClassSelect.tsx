import { useState } from "react";
import { Tag } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TravelClass } from "@/types/global";

interface TravelClassSelectProps {
  onChange?: (value: TravelClass) => void;
}

const travelClassLst = Object.values(TravelClass);

export const TravelClassSelect: React.FC<TravelClassSelectProps> = ({
  onChange,
}) => {
  const [selectedClass, setSelectedClass] = useState<TravelClass>(
    TravelClass.Economy
  );

  const handleChange = (val: TravelClass) => {
    setSelectedClass(val);
    onChange?.(val);
  };

  return (
    <div className="flex items-center gap-2">
      <Tag size={"1rem"} />
      <Select onValueChange={handleChange} value={selectedClass}>
        <SelectTrigger>
          <span>
            {selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}
          </span>
        </SelectTrigger>
        <SelectContent>
          {travelClassLst.map((cl) => (
            <SelectItem key={cl} value={cl}>
              {cl.charAt(0).toUpperCase() + cl.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
