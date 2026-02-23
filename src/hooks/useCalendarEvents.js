import { useState, useEffect } from "react";
import { fetchCalendar } from "../services/calendarActions";

/**
 * یک hook برای گرفتن داده‌های ماه و مدیریت state رویدادها
 */
export function useCalendarEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadCalendar = async () => {
      setLoading(true);
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;

      try {
        const data = await fetchCalendar(year, month);
        setEvents(data);
      } catch (error) {
        console.error("خطا در دریافت تقویم:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    loadCalendar();
  }, []);

  return { events, loading };
}
