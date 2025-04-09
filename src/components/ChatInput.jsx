import { useState } from "react";
import mic from "../assets/mic.svg";

const ChatInput = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSubmit(message);
        setMessage("");
      }
    }
  };

  return (
    <section className="mx-5 max-w-2xl sm:mx-auto ">
      <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow mt-10">
        <div className="flex flex-col flex-grow">
          <textarea
            placeholder="Ask Najm Co-Pilot"
            className="flex-1 outline-none text-[#667085] resize-none"
            id="search"
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Ask Najm Co-Pilot"
          />
        </div>
        <div className="flex items-center ml-4">
          <p className="px-2 cursor-pointer text-[#667085] mr-2 text-base">...</p>
          <img
            className="font-bold text-xl cursor-pointer"
            src={mic}
            alt="Microphone"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatInput;
