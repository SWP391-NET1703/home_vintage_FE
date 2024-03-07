import axios from "axios";
export const getListProductDetail = async (_id) => {
  const res = await axios.get(
    `https://home-vintage-backend.onrender.com/interiors/${_id}`
  );
  return res.data;
};
