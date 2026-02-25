"use client";

import { useCallback, useMemo, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";

export default function Calendar({ events, onDateClick }) {
  const calendarRef = useRef(null);

  const handleDateClick = useCallback(
    (info) => onDateClick(info.dateStr),
    [onDateClick]
  );

  const plugins = useMemo(() => [dayGridPlugin, interactionPlugin], []);

  const handlePrev = () => {
    const api = calendarRef.current?.getApi();
    api?.prev();
  };

  const handleNext = () => {
    const api = calendarRef.current?.getApi();
    api?.next();
  };

  const handleToday = () => {
    const api = calendarRef.current?.getApi();
    api?.today();
  };

  // Custom render برای Event - ریسپانسیو
  const renderEventContent = (eventInfo) => (
    <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-[10px] sm:text-xs md:text-sm rounded-full px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
      {eventInfo.event.title}
    </div>
  );

  // Custom render برای Day Cell - ریسپانسیو
  const renderDayCellContent = (dayCellInfo) => (
    <div className="hover:bg-pink-50 transition-colors duration-200 cursor-pointer rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base flex justify-center items-center h-6 sm:h-8 md:h-10 w-full">
      {dayCellInfo.dayNumberText.replace("日", "")}
    </div>
  );

  // Custom render برای Day Header
  const renderDayHeaderContent = (headerInfo) => (
    <div className="text-gray-500 sm:text-gray-600 text-[10px] sm:text-xs md:text-sm font-medium py-2 sm:py-3">
      {headerInfo.text}
    </div>
  );

  return (
    <div className="w-full -scale-z-50 max-w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md sm:shadow-lg border border-gray-100 p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* دکمه‌های سفارشی */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 md:mb-5 px-1">
        <div className="flex gap-1.5 sm:gap-2 md:gap-3">
          <button
            onClick={handlePrev}
            className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 rounded-lg px-2.5 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-[11px] sm:text-sm md:text-base font-medium transition-all duration-200 active:scale-95 hover:shadow-sm"
          >
            قبلی
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 rounded-lg px-2.5 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 text-[11px] sm:text-sm md:text-base font-medium transition-all duration-200 active:scale-95 hover:shadow-sm"
          >
            بعدی
          </button>
        </div>

        <button
          onClick={handleToday}
          className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 active:from-pink-700 active:to-blue-700 text-white rounded-lg px-3 py-1 sm:px-5 sm:py-1.5 md:px-6 md:py-2 text-[11px] sm:text-sm md:text-base font-bold shadow-md hover:shadow-lg active:shadow-sm transition-all duration-200 active:scale-95"
        >
          امروز
        </button>
      </div>

      <div className="min-w-[280px]">
        <FullCalendar
          ref={calendarRef}
          plugins={plugins}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          height="auto"
          locale={faLocale}
          direction="rtl"
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          titleFormat={{ year: "numeric", month: "long" }}
          titleClassNames="text-sm sm:text-lg md:text-xl font-bold text-gray-800 py-2 sm:py-3"
          dayMaxEvents={true}
          moreLinkClassNames="text-[10px] sm:text-xs text-pink-500 hover:text-pink-600 font-medium"
          eventContent={renderEventContent}
          dayCellContent={renderDayCellContent}
          dayHeaderContent={renderDayHeaderContent}
          viewClassNames="bg-white"
        />
      </div>
    </div>
  );
}