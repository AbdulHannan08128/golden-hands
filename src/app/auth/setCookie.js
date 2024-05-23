'use server'
 
import { cookies } from 'next/headers';
 
async function setCookie(name, value) {
  const oneYear = 24 * 60 * 60 * 1000 * 365
  cookies().set(name, value, { expires: Date.now() + oneYear })
}

export {setCookie};