"use client";

import Calendar from "@/API/calender/Calendar";
import DaySlots from "@/API/calender/daySlots";
import ReservationModal from "@/API/reservForm/ReservationModal";
import { handleDateClick } from "@/services/calendarActions";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";
import { useReservation } from "@/hooks/useReservation";
import { useState, useCallback, useMemo } from "react";
import { CalendarDays, Clock, Sparkles } from "lucide-react";

export default function CalendarPage() {
  const { events, loading } = useCalendarEvents();
  const { isOpen, selectedSlot, openReservation, closeReservation } =
    useReservation();

  const [selectedDate, setSelectedDate] = useState(null);
  const [daySlots, setDaySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const formattedDate = useMemo(() => {
    if (!selectedDate) return "";
    return new Date(selectedDate).toLocaleDateString("fa-IR");
  }, [selectedDate]);

  const onDateClick = useCallback(
    async (date) => {
      try {
        setSelectedDate(date);
        setDaySlots([]); // جلوگیری از فلاش داده قبلی
        setLoadingSlots(true);

        await handleDateClick(date, setDaySlots, setLoadingSlots);
      } catch (error) {
        console.error("خطا در دریافت تایم‌ها:", error);
        setLoadingSlots(false);
      }
    },
    []
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b -scale-z-100 from-white via-pink-50/30 to-white py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            سیستم نوبت‌دهی آنلاین
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            تقویم{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
              نوبت‌دهی
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            تاریخ مورد نظر خود را انتخاب کنید و از بین تایم‌های موجود، نوبت خود
            را رزرو کنید
          </p>
        </div>

        {/* Calendar */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <Calendar events={events} onDateClick={onDateClick} />
        )}

        {/* Day Slots */}
        {selectedDate && (
          <div className="mt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-3xl blur-xl opacity-50"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-pink-200">
                  <Clock className="w-6 h-6" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    تایم‌های{" "}
                    <span className="text-pink-600">{formattedDate}</span>
                  </h2>
                  <p className="text-gray-500 text-sm">
                    یک تایم مناسب را انتخاب کنید
                  </p>
                </div>
              </div>

              <DaySlots
                slots={daySlots}
                loading={loadingSlots}
                onSlotClick={openReservation}
              />
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedDate && !loading && (
          <div className="mt-10 text-center py-12 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
            <CalendarDays className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              روزی از تقویم را انتخاب کنید تا تایم‌های موجود را ببینید
            </p>
          </div>
        )}

        {/* Modal */}
        <ReservationModal
          isOpen={isOpen}
          onClose={closeReservation}
          slot={selectedSlot}
        />
      </div>
    </div>
  );
}