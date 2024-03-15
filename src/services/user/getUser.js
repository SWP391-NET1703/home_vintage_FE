import axios from "axios";

export const getUser = async (access_token) => {
  try {
    const response = await axios.get(
      "https://home-vintage-backend.onrender.com/users/me",
      {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if ([200, 201].includes(response.status)) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    alert(error);
  }
};
