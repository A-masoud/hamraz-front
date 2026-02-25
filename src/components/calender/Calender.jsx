import React from "react";
import { useCalendarEvents } from "@/hooks/calender/useCalendarEvents";
import FullCalendar from "@/components/ui/FullCalendar";

export default function Calender({ onDateClick }) {
  const { events, loading } = useCalendarEvents();

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <FullCalendar events={events} onDateClick={onDateClick} />
      )}
    </div>
  );
}