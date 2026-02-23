import api from "./api";

// گرفتن کل ماه
export const getMonthCalendar = async (year, month) => {
  const response = await api.get("/calendar/month/", {
    params: { year, month },
  });

  return response.data;
};

// گرفتن تایم‌اسلات‌های یک روز
export const getDayTimeSlots = async (date) => {
  const response = await api.get("/timeslots/", {
    params: { date },
  });

  return response.data;
};

// ساخت تایم‌اسلات
export const createTimeSlot = async (data) => {
  const response = await api.post("/timeslot/create/", data);
  return response.data;
};
