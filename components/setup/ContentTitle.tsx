"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const ContentTitle = ({
  title,
  hideBackbtn = false,
}: {
  title: string;
  hideBackbtn?: boolean;
}) => {
  const router = useRouter();
  {
    /* Form Title  */
  }
  return (
    <div className="flex items-center text-[#4a4a4a] justify-between py-5 w-full">
      {!hideBackbtn ? (
        <IoCaretBackCircleOutline
          className="text-[1.8rem] cursor-pointer"
          onClick={() => router.back()}
        />
      ) : (
        <span></span>
      )}
      <span className="text-[1.7em]">{title}</span>
      <span></span>
    </div>
  );
};

export default ContentTitle;
