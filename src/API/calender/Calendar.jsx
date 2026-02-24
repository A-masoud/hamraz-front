import { useCallback, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ events, onDateClick }) {

  const handleDateClick = useCallback((info) => {
    onDateClick(info.dateStr);
  }, [onDateClick]);

  const plugins = useMemo(() => {
    return [dayGridPlugin, interactionPlugin];
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 overflow-hidden">
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
        dayCellClassNames="hover:bg-pink-50 transition-colors duration-200 cursor-pointer"
        eventClassNames="bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs rounded-full px-2 py-1 border-none shadow-sm"
      />

      <style jsx global>{`
        .fc-toolbar {
          margin-bottom: 24px;
        }

        .fc {
          font-family: inherit;
        }

        .fc-toolbar-title {
          font-size: 1.5rem !important;
          font-weight: 700;
          color: #1f2937;
        }

        .fc-button {
          background: linear-gradient(135deg, #ec4899 0%, #3b82f6 100%) !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 8px 16px !important;
          font-weight: 600 !important;
          box-shadow: 0 4px 14px rgba(236, 72, 153, 0.25) !important;
          transition: all 0.3s ease !important;
        }

        .fc-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(236, 72, 153, 0.35) !important;
        }

        .fc-day-today {
          background: linear-gradient(
            135deg,
            rgba(236, 72, 153, 0.1) 0%,
            rgba(59, 130, 246, 0.1) 100%
          ) !important;
          border-radius: 12px;
        }

        .fc-daygrid-day-number {
          padding: 8px !important;
          font-weight: 500;
        }

        .fc-event {
          border-radius: 20px !important;
          font-size: 0.75rem !important;
          padding: 2px 8px !important;
        }
      `}</style>
    </div>
  );
}