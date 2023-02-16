"use client";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { DB } from "../../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(DB, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 md:flex flex-col h-full fixed overflow-y-auto hidden">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {loading && (
            <div className="animate-pulse text-center text-white mt-5">
              <p>Loading Chats...</p>
            </div>
          )}

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image!}
          alt="Profile Pic"
          className="w-12 h-12 mx-auto my-2 rounded-full
        hover:opacity-40 cursor-pointer transition-opacity duration-200"
        />
      )}
    </div>
  );
};

export default SideBar;
