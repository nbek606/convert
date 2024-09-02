import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://status.neuralgeneration.com/api",
});

export default axiosInstance;