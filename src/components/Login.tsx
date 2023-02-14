"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-[#11A37f] h-screen">
      <Image
        src={"https://links.papareact.com/2i6"}
        width={300}
        height={300}
        alt="Logo"
      />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign In To Use ChatGPT
      </button>
    </div>
  );
};

export default Login;
