"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

type DatePickerProps = {
  icon?: string;
  placeholder?: string;
  date: Date;
  onChange: (date: Date | undefined) => void;
};

export function DatePicker({
  icon,
  placeholder,
  date,
  onChange,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-[240px] hover:bg-transparent justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {icon && (
            <Image
              src={icon}
              alt="calendar"
              width={24}
              height={24}
              className="mr-4 filter-grey"
            />
          )}
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-[16px] text-gray-500">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
