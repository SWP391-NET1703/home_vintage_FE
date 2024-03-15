import axios from "axios";

export const createOrder = async (data, access_token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const response = await axios.post(
    "https://home-vintage-backend.onrender.com/orders/checkout",
    data
  );
  if ([200, 201].includes(response.status)) {
    return response.data;
  } else {
    console.log(response);
    // throw new Error(response.statusText);
  }
  // } catch (error) {
  //   alert(error);
  // }
};
