import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className='lg:w-80 lg:h-60 bg-white shadow-lg dark:bg-gray-700 rounded-3xl relative align-middle justify-center flex w-screen scale-90'>
         <div className='absolute top-4 left-1 font-bold text-white dark:text-blue-100 bg-green-500 p-3 rounded-2xl'>{title}</div>
         <div className='lg:text-9xl text-7xl mt-20 font-light text-green-900 dark:text-green-300 p-4'>{value}</div>
    </div>
  );
};

export default Card;
