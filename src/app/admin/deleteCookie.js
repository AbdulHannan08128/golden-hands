'use server'
 
import { cookies } from 'next/headers';
 
async function deleteCookie(name) {
  const oneYear = 24 * 60 * 60 * 1000 * 365
  cookies().set(name, 'deleted', { expires: Date.now() - oneYear })
}

export {deleteCookie};