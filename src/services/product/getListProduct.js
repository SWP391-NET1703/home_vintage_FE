import axios from "axios";

export const getListProduct = async () => {
  const res = await axios.get(
    "https://home-vintage-backend.onrender.com/interiors?type=bestSeller"
  );
  return res.data;
};
