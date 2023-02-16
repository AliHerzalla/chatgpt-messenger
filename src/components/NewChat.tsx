"use client"
import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {DB} from "../../firebase"

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(DB, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`chats/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4 font-[500]" />
      <p className="font-[500]">New Chat</p>
    </div>
  );
};

export default NewChat;
