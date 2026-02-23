"use client";

import Calendar from "@/API/calender/Calendar";
import DaySlots from "@/API/calender/daySlots";
import ReservationModal from "@/API/reservForm/ReservationModal";
import { handleDateClick } from "@/services/calendarActions";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";
import { useReservation } from "@/hooks/useReservation";
import { useState } from "react";

export default function CalendarPage() {
  const { events, loading } = useCalendarEvents();
  const { isOpen, selectedSlot, openReservation, closeReservation } =
    useReservation();

  const [selectedDate, setSelectedDate] = useState(null);
  const [daySlots, setDaySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const onDateClick = async (date) => {
    setSelectedDate(date);
    await handleDateClick(date, setDaySlots, setLoadingSlots);
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        تقویم نوبت‌دهی
      </h1>

      {loading ? (
        <p>در حال دریافت تقویم...</p>
      ) : (
        <Calendar events={events} onDateClick={onDateClick} />
      )}

      {selectedDate && (
        <div className="mt-10 p-6 bg-white rounded-2xl shadow">
          <h2 className="text-xl text-green-400 font-bold mb-4">
            تایم‌های {selectedDate}
          </h2>

          <DaySlots
            slots={daySlots}
            loading={loadingSlots}
            onSlotClick={openReservation}
          />
        </div>
      )}

      <ReservationModal
        isOpen={isOpen}
        onClose={closeReservation}
        slot={selectedSlot}
      />
    </div>
  );
}
