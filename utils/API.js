import axios from "axios";

const API = axios.create({
  baseURL: process.env.BASE_URL,
});

export const BOOK_APPOINTMENT = async (data)=>{
   const response = API.post('api/book-appointment', data);
   return response;
}
export const TRACK_APPOINTMENT = async (data)=>{
  const response = API.post('api/track-appointment', data);
  return response;
}
export const CONTACT = async (data)=>{
  const response = API.post('api/contact', data);
  return response;
}