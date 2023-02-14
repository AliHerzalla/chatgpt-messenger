"use client";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-full">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Pic"
          className="w-12 h-12 mx-auto mb-2 rounded-full
        hover:opacity-40 cursor-pointer transition-opacity duration-200"
        />
      )}
    </div>
  );
};

export default SideBar;
