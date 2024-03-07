import { axiosInstance, setAccessToken } from "services/axios.config";
import { store } from "store/store";
export const history = async () => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.result.access_token;
  setAccessToken(token);
  const res = await axiosInstance.get("/orders/history");
  return res.data;
};
