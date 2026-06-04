import api from "./api";

export const fetchArtisans = async () => {
  try {
    const data = await api.get("/artisans");
    return data;
  } catch {
    return [
      { id: 1, name: "Chidi Okonkwo", specialty: "Interior Decorator", verified: true },
      { id: 2, name: "Emeka Nwosu", specialty: "Welder", verified: true },
      { id: 3, name: "Ngozi Eze", specialty: "Fashion Designer", verified: false },
    ];
  }
};

export const fetchArtisanById = async (id) => {
  try {
    const data = await api.get(`/artisans/${id}`);
    return data;
  } catch {
    return null;
  }
};

export const submitBooking = async (artisanId, bookingData) => {
  return api.post(`/artisans/${artisanId}/bookings`, bookingData);
};
