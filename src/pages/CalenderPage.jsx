"use client";
import Header from "@/components/calender/Header";
import ReservationModal from "@/components/reservationModal/ReservationModal";
import { useCalendarEvents } from "@/hooks/calender/useCalendarEvents";
import { useReservation } from "@/hooks/calender/useReservation";
import { useCalendarPage } from "@/hooks/calender/useTimeSlot";
import Calender from "@/components/calender/Calender";
import TimeSlot from "@/components/calender/DaySlot";
export default function CalendarPage() {
  const { loading } = useCalendarEvents();
  const { isOpen, selectedSlot, openReservation, closeReservation } = useReservation();
  const { selectedDate, daySlots, loadingSlots, formattedDate, onDateClick, slotsRef, } = useCalendarPage();

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">

        <Header />

        <Calender onDateClick={onDateClick} />


        <TimeSlot
          selectedDate={selectedDate}
          daySlots={daySlots}
          loadingSlots={loadingSlots}
          formattedDate={formattedDate}
          slotsRef={slotsRef}
          openReservation={openReservation}
          loading={loading}
        />

        <ReservationModal
          isOpen={isOpen}
          onClose={closeReservation}
          slot={selectedSlot}
        />
      </div>
    </div>
  );
}