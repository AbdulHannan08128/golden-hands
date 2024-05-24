'use server'
import { cookies } from 'next/headers'

export async function getCookie(name) {
  const cookieStore = cookies(); 
  const role = cookieStore.get(name).value; 
  return role;
}
