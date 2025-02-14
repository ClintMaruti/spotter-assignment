import { useState } from "react";
import { UsersIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PassengerInputProps {
  onChange?: (count: number) => void;
}

export const PassengerInput: React.FC<PassengerInputProps> = ({ onChange }) => {
  const [passengerCount, setPassengerCount] = useState<number>(1);

  const handleChange = (value: number) => {
    const validValue = Math.max(1, value);
    setPassengerCount(validValue);
    onChange?.(validValue);
  };
  const increment = () => {
    setPassengerCount((prev) => prev + 1);
  };

  const decrement = () => {
    setPassengerCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="flex items-center gap-2">
      <UsersIcon size={"1rem"} />
      <button
        type="button"
        onClick={decrement}
        className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
      >
        -
      </button>
      <Input
        type="number"
        min="1"
        value={passengerCount}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="md:max-w-16 text-center"
      />
      <button
        type="button"
        onClick={increment}
        className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
      >
        +
      </button>
    </div>
  );
};
