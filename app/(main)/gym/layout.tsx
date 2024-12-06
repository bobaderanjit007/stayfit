import GymHeader from "@/components/gym/GymHeader";
import GymSidebar from "@/components/gym/GymSidebar";
import MobileGymSidebar from "@/components/gym/MobileGymSidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <GymHeader />
      <div className="flex h-[calc(100vh-5em)] relative">
        <GymSidebar />
        <MobileGymSidebar/>
        <div className="flex-grow px-[3vw]  py-5 w-[70%] h-[88vh] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
