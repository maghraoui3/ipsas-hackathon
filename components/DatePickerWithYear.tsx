import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatePickerWithYearProps {
    selected: Date | null; // Change to Date | null
    onChange: (date: Date) => void;
  }
  
  export function DatePickerWithYear({ selected, onChange }: DatePickerWithYearProps) {
    const [year, setYear] = useState(new Date().getFullYear());
  
    const years = Array.from({ length: 150 }, (_, i) => 1900 + i);
  
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal dark:bg-gray-800 dark:border-gray-700"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, "PPP") : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 dark:bg-gray-800">
          <div className="flex items-center justify-between p-2">
            <Select
              value={year.toString()}
              onValueChange={(value) => setYear(parseInt(value))}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y.toString()}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Calendar
            mode="single"
            selected={selected || undefined} // Ensure it's Date | undefined
            onSelect={(date) => date && onChange(date)}
            defaultMonth={new Date(year, 0)}
            fromYear={1900}
            toYear={new Date().getFullYear() + 10}
          />
        </PopoverContent>
      </Popover>
    );
  }