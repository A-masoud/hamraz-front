"use client";

import { useCallback, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ events, onDateClick }) {
  const handleDateClick = useCallback(
    (info) => {
      onDateClick(info.dateStr);
    },
    [onDateClick]
  );

  const plugins = useMemo(() => [dayGridPlugin, interactionPlugin], []);

  return (
    <div className="bg-white scale-z-50 rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden">
      <FullCalendar
        plugins={plugins}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        height="auto"
        locale="fa"
        direction="rtl"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        buttonText={{
          today: "امروز",
        }}
        titleFormat={{ year: "numeric", month: "long" }}
        dayHeaderClassNames="text-gray-600 font-medium py-3"
        dayCellClassNames="hover:bg-pink-50 transition-colors duration-200 cursor-pointer rounded-lg"
        eventClassNames="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs rounded-full px-2 py-1 shadow-sm"
      />
    </div>
  );
}