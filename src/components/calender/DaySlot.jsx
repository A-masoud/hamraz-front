"use client";
import React from "react";
import { Clock, CalendarDays } from "lucide-react";
import DaySlots from "@/components/calender/TimeSlots";

export default function TimeSlot({
  selectedDate,
  daySlots,
  loadingSlots,
  formattedDate,
  slotsRef,
  openReservation,
  loading
}) {
  return (
    <div>
      {selectedDate && (
        <div ref={slotsRef} className="mt-10 relative">
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

      {!selectedDate && !loading && (
        <div className="mt-10 text-center py-12 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
          <CalendarDays className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            روزی از تقویم را انتخاب کنید تا تایم‌های موجود را ببینید
          </p>
        </div>
      )}
    </div>
  );
}