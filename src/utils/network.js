import axios from "axios";
const endpoint = "https://gtdxxiv-service.pintugtd.com/";

export const AxiosInit = () => {
  try {
    return axios.create({
      baseURL: endpoint,
    });
  } catch (err) {
    console.error(err.message);
  }
};
