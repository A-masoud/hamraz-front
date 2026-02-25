"use client";

import { Clock, CheckCircle2, XCircle } from "lucide-react";
import { memo, useCallback } from "react";

function DaySlots({ slots = [], loading = false, onSlotClick }) {
  const handleSlotClick = useCallback(
    (slot) => {
      if (slot.status !== "reserved") {
        onSlotClick?.(slot);
      }
    },
    [onSlotClick]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
        <span className="mr-4 text-gray-600 font-medium">
          در حال دریافت تایم‌ها...
        </span>
      </div>
    );
  }

  if (!slots.length) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <XCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600 font-medium">
          تایمی برای این روز وجود ندارد
        </p>
        <p className="text-gray-400 text-sm mt-1">
          لطفاً روز دیگری انتخاب کنید
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {slots.map((slot) => {
        const isReserved = slot.status === "reserved";

        return (
          <button
            key={slot.id}
            onClick={() => handleSlotClick(slot)}
            disabled={isReserved}
            className={`relative group p-4 rounded-2xl text-center transition-all duration-300 overflow-hidden
              ${
                isReserved
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-200"
                  : "bg-white border-2 border-gray-100 text-gray-700 cursor-pointer hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 hover:-translate-y-1 hover:scale-105"
              }`}
          >
            {!isReserved && (
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}

            <div className="relative z-10">
              <div
                className={`w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center
                  ${
                    isReserved
                      ? "bg-gray-200"
                      : "bg-gradient-to-br from-pink-500 to-blue-500 text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  }`}
              >
                {isReserved ? (
                  <XCircle className="w-5 h-5 text-gray-400" />
                ) : (
                  <Clock className="w-5 h-5" />
                )}
              </div>

              <div className="font-bold text-lg mb-1">
                {slot.start_time}
              </div>

              <div className="text-xs text-gray-400 mb-2">
                تا {slot.end_time}
              </div>

              <div
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                  ${
                    isReserved
                      ? "bg-gray-200 text-gray-500"
                      : "bg-green-100 text-green-700 group-hover:bg-green-200 transition-colors"
                  }`}
              >
                {isReserved ? (
                  <>
                    <XCircle className="w-3 h-3" />
                    رزرو شده
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    آزاد
                  </>
                )}
              </div>
            </div>

            {!isReserved && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default memo(DaySlots);