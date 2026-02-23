import api from "./api";

// ساخت درخواست
export const createAppointmentRequest = async (data) => {
  const response = await api.post("/appointment/request/create/", data);
  return response.data;
};

// لیست درخواست‌ها
export const getAppointmentRequests = async () => {
  const response = await api.get("/appointment/request/list/");
  return response.data;
};

// تایید درخواست
export const approveAppointment = async (id) => {
  const response = await api.patch(
    `/appointment/request/${id}/approve/`
  );

  return response.data;
};
