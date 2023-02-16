"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { DB } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState("");

  const { data: model } = useSWR("getModels", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    const input = inputValue.trim();
    setInputValue("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        DB,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const loadingNotify = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputValue: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT has responded!", {
        id: loadingNotify,
      });
    });
  };

  return (
    <div className="sticky bottom-0 backdrop-blur-[2px]">
      <form
        onSubmit={sendMessage}
        className="flex items-center p-5 space-x-5 bg-[#40414F] m-5 rounded-xl z-10 "
      >
        <input
          type="text"
          className="bg-transparent outline-none focus:outline-none
        text-white disabled:cursor-not-allowed disabled:text-gray-300 placeholder:text-gray-300 w-full"
          placeholder="Enter Your Message Here..."
          value={inputValue}
          disabled={!session}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          disabled={!session || !inputValue}
          className="flex bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 transition-all duration-200 focus:outline-none outline-none"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45 text-center" />
        </button>
      </form>

      {/* <div className="md:hidden">
        <ModelSelection />
      </div> */}
    </div>
  );
};

export default ChatInput;
