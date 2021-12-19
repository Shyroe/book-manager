import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:2000"
});

export default axiosClient;
