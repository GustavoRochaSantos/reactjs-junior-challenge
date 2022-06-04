// ----------External Libs---------
import axios from "axios";


// Creates an function with axios where the base URL is defined
export const api = axios.create({
  baseURL: "http://localhost:3001",
});