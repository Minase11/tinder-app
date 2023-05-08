import axios from "axios";

const instance = axios.create({
  // baseURL: "https://tinder-backend-pi.vercel.app",
  baseURL: "https://tinder-modern-backend.vercel.app/",
});

export default instance;
