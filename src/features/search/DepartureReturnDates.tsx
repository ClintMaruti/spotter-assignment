import { DatePicker } from "@/components/ui/DatePicker";
import { useState } from "react";

interface DepartureReturnDatesProps {
  isRoundTrip: boolean;
  onDepartureDate: (date?: Date) => void;
  onReturnDate: (date?: Date) => void;
}

export const DepartureReturnDates: React.FC<DepartureReturnDatesProps> = ({
  isRoundTrip,
  onDepartureDate,
  onReturnDate,
}) => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();

  const handleDepartureDate = (date?: Date) => {
    setDepartureDate(date);
    onDepartureDate(date);
  };

  const handleReturnDate = (date?: Date) => {
    setReturnDate(date);
    onReturnDate(date);
  };
  return (
    <div className="flex items-center space-x-2 w-full border border-border p-1 rounded-md">
      <DatePicker
        selectedDate={departureDate}
        onDateChange={handleDepartureDate}
        placeholder="Departure"
        dateFormat="yyyy-MM-dd"
        className="outline-none"
        buttonVariant="ghost"
        disabled={false}
      />
      {isRoundTrip ? (
        <>
          <div className="text-muted-foreground font-normal">|</div>
          <DatePicker
            selectedDate={returnDate}
            onDateChange={handleReturnDate}
            placeholder="Return"
            dateFormat="yyyy-MM-dd"
            className=""
            buttonVariant="ghost"
            disabled={false}
            showIcon={false}
          />
        </>
      ) : null}
    </div>
  );
};
