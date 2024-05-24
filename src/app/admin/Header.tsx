"use client";
import React from "react";
import ThemeToggler from "@/components/Header/ThemeToggler";
const Header = ({ title }) => {
  return (
    <header className="relative mr-3 mt-3 rounded-3xl bg-gray-800 px-5 py-4 text-white">
      <h1 className="text-lg font-semibold">
        {title}
        <div className="absolute right-16 lg:top-1 top-2 rounded-xl bg-white p-0 scale-75 dark:bg-gray-600">
          
          <ThemeToggler />
        </div>
      </h1>
    </header>
  );
};

export default Header;
