import { getMonthCalendar, getDayTimeSlots } from "@/services/timeslot.service";

/**
 * گرفتن داده‌های ماه برای تقویم
 */
export async function fetchCalendar(year, month) {
  const data = await getMonthCalendar(year, month);

  const formattedEvents = Object.entries(data).map(([date, status]) => {
    let color = "#e5e7eb";
    if (status === "available") color = "#22c55e";
    if (status === "full") color = "#ef4444";

    return {
      start: date,
      display: "background",
      backgroundColor: color,
    };
  });

  return formattedEvents;
}

/**
 * هندل کلیک روی یک روز
 */
export async function handleDateClick(date, setDaySlots, setLoadingSlots) {
  setLoadingSlots(true);
  try {
    const slots = await getDayTimeSlots(date);
    setDaySlots(slots);
  } catch (error) {
    console.error("خطا در گرفتن تایم‌ها:", error);
    setDaySlots([]);
  } finally {
    setLoadingSlots(false);
  }
}
