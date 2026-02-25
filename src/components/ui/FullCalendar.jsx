"use client";
import { useRef, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


export default function Calendar({ events, onDateClick }) {
  const calendarRef = useRef(null);

  const goPrev = () => calendarRef.current.getApi().prev();
  const goNext = () => calendarRef.current.getApi().next();
  const goToday = () => calendarRef.current.getApi().today();

  const plugins = useMemo(() => [dayGridPlugin, interactionPlugin], []);

  return (
    <div className="bg-white -scale-z-50 rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden">
      {/* دکمه‌های کنترل تقویم */}
      <div className="flex justify-between mb-4 flex-wrap gap-2">
        <button
          onClick={goPrev}
          className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-pink-600 transition-colors"
        >
          قبلی
        </button>
        <button
          onClick={goToday}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
        >
          امروز
        </button>
        <button
          onClick={goNext}
          className="bg-pink-500 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-pink-600 transition-colors"
        >
          بعدی
        </button>
      </div>

      {/* تقویم */}
      <FullCalendar
        ref={calendarRef}
        plugins={plugins}
        initialView="dayGridMonth"
        events={events}
        dateClick={(info) => onDateClick(info.dateStr)}
        height="auto"
        locale="fa"
        direction="rtl"
        headerToolbar={false} // دکمه‌ها رو خودمون ساختیم
        buttonText={{ today: "امروز" }}
        titleFormat={{ year: "numeric", month: "long" }}
        dayHeaderClassNames="text-gray-600 text-[11px] sm:text-sm font-medium py-3"
        dayCellClassNames="hover:bg-pink-50 transition-colors duration-200 cursor-pointer rounded-lg"
        eventClassNames="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs rounded-full px-2 py-1 shadow-sm"
      />
    </div>
  );
}