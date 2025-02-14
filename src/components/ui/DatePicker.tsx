import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selectedDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  dateFormat?: string;
  className?: string;
  buttonVariant?: "default" | "outline" | "destructive" | "ghost" | "link";
  disabled?: boolean;
  showIcon?: boolean;
}

export function DatePicker({
  selectedDate,
  onDateChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  className,
  buttonVariant = "outline",
  disabled = false,
  showIcon = true,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={buttonVariant}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          {showIcon ? <CalendarIcon className="mr-2 h-4 w-4" /> : null}
          {selectedDate ? (
            format(selectedDate, dateFormat)
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}
