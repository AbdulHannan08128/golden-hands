import React from 'react'
import  Chart  from "./Chart";
import { Metadata } from 'next';
import Cards from './Cards';

export const metadata : Metadata = {
    title:'Admin Panel || GH'
}
const page = () => {
  return (
    <>
    <div>
      <Cards/>
    </div>
    
    </>
  )
}

export default page