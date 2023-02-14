import { PlusIcon } from "@heroicons/react/24/solid";

const NewChat = () => {
  return (
    <div className="border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4 font-[500]" />
      <p className="font-[500]">New Chat</p>
    </div>
  );
};

export default NewChat;
