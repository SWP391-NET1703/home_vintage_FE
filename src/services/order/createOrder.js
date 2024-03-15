import axios from "axios";

export const createOrder = async (data) => {
  console.log("ahihi");
  console.log(data);
  const response = await axios.post(
    "http://localhost:4000/orders/checkout",
    data
  );
  if ([200, 201].includes(response.status)) {
    console.log(response.data);
  } else {
    console.log(response);
    // throw new Error(response.statusText);
  }
  // } catch (error) {
  //   alert(error);
  // }
};
