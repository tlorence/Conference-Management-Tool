import axios from "axios";

export const imagePath = "http://localhost:3000/img/";

// const baseUrlSpring = process.env.SPEING_API_URL;
export const Axios = axios.create({ baseURL: "http://localhost:9900/" });
