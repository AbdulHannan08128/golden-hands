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
    <div className='lg:grid grid-cols-2' style={{width:'520px', height:'520px', maxWidth:'90vw', overflow:'scroll'}}>

    <Chart/>
    
    </div>
    </>
  )
}

export default page