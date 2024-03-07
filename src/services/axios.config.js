import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://home-vintage-backend.onrender.com", // Thay đổi URL API của bạn tại đây
});

// Hàm để cấu hình gửi kèm AccessToken
export const setAccessToken = (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
