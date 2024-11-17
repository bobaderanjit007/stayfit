import GymHeader from "@/components/gym/GymHeader";
import GymSidebar from "@/components/gym/GymSidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <GymHeader />
      <div className="flex h-[calc(100vh-5em)]">
        <GymSidebar />
        <div className="flex-grow px-[3vw] overflow-auto pb-[5em]">
          {children}
        </div>
      </div>
    </div>
  );
}
