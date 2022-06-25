import axios from "axios";
const endpoint = "http://gtd-xxiv-website-backend.herokuapp.com";

export const AxiosInit = () => {
  try {
    return axios.create({
      baseURL: endpoint,
    });
  } catch (err) {
    console.error(err.message);
  }
};
