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
export const ADMIN_LOGIN = async (data)=>{
  const response = API.post('api/auth', data);
  return response;
}
export const ADMIN = async (data)=>{
  const response = API.get(`api/admin?GH_KEY=Obj2321098767890_GH`, data);
  return response;
}