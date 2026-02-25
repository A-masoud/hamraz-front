"use client";

import { useState, useCallback, useMemo, useRef } from "react";
import { handleDateClick } from "@/services/calendarActions";

export function useCalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [daySlots, setDaySlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const slotsRef = useRef(null);

  const formattedDate = useMemo(() => {
    if (!selectedDate) return "";
    return new Date(selectedDate).toLocaleDateString("fa-IR");
  }, [selectedDate]);

  const onDateClick = useCallback(async (date) => {
    try {
      setSelectedDate(date);
      setDaySlots([]);
      setLoadingSlots(true);

      await handleDateClick(date, setDaySlots, setLoadingSlots);

      setTimeout(() => {
        slotsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.error("خطا در دریافت تایم‌ها:", error);
      setLoadingSlots(false);
    }
  }, []);

  return {
    selectedDate,
    daySlots,
    loadingSlots,
    formattedDate,
    onDateClick,
    slotsRef,
  };
}