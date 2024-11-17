import LoginForm from "@/components/setup/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerLogin = () => {
  return (
    <section className="bg-black flex h-screen justify-center items-center">
      {/* Image  */}
      <div className="h-screen w-[50vw] hidden xl:flex flex-col items-center justify-center">
        <div>
          <Image
            alt="loginbg"
            src="https://t3.ftcdn.net/jpg/05/62/71/86/360_F_562718625_BM93noP9JDAR8kiBPfRy0h4WTvUwYXNH.jpg"
            // layout="responsive"
            width={700}
            height={100}
          />
        </div>
      </div>
      {/* LoginForm  */}
      <div className="flex-grow flex items-center justify-center flex-col">
        <div className="w-[80%] xl:w-[60%] space-y-[2em] my-[1em]">
          <span className="text-gray-500 block">Welcome back</span>
          <Link href="/" className="text-3xl font-semibold text-white z-10">
            StayFit Partner
          </Link>
        </div>
        <div className="text-white border border-slate-300 w-[80%] xl:w-[60%] p-8 rounded-2xl shadow-lg shadow-blue-200">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default PartnerLogin;
