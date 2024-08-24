import React from 'react';

const colorMapping = {
  green: {
    bg: 'bg-green-500',
    text: 'text-green-900',
    darkText: 'dark:text-green-300'
  },
  red: {
    bg: 'bg-red-500',
    text: 'text-red-900',
    darkText: 'dark:text-red-300'
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-900',
    darkText: 'dark:text-blue-300'
  },
  yellow: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-900',
    darkText: 'dark:text-yellow-300'
  },
  // Add more colors as needed
};

const Card = ({ title, value, color, text_color }) => {
  const colorClass = colorMapping[color] || colorMapping.green; // Default to green if color is not found
  const textColorClass = colorMapping[text_color] || colorMapping.green; // Default to green if text_color is not found

  return (
    <div className='lg:w-80 lg:h-60 bg-white shadow-lg dark:bg-gray-700 rounded-3xl relative align-middle justify-center flex w-screen scale-90'>
      <div className={`absolute top-4 left-1 font-bold text-white dark:text-blue-100 ${colorClass.bg} p-3 rounded-2xl`}>
        {title}
      </div>
      <div className={`lg:text-9xl text-7xl mt-20 font-light ${colorClass.text} ${textColorClass.darkText} p-4`}>
        {value}
      </div>
    </div>
  );
};

export default Card;
