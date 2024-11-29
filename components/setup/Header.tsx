"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has scrolled more than the viewport height
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up
  }, []);
  return (
    <header
      className={`flex justify-between items-center px-[2.5em] ${
        isScrolled
          ? "bg-gray-200 text-gray-800 bg-opacity-80"
          : "bg-transparent"
      } h-[5em]  fixed w-screen flex-grow top-0 z-10`}
    >
      <div className="text-3xl font-semibold ">
        {" "}
        <Link href="/gym/dashboard">StayFit</Link>
      </div>
      <div className="flex space-x-[2em] font-extralight text-[1rem]">
        <Link href="/" className="text-red-500">
          Home
        </Link>
        <Link href="/partner-login">Partner Login</Link>
      </div>
    </header>
  );
};

export default Header;
