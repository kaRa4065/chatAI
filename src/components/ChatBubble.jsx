import { useState } from "react";
import star from "../assets/star.svg";

const ChatBubble = ({ role, text }) => {
  const isUser = role === "user";
  const [copy, setCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, [3000]);
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2 px-4`}
    >
      <div
        className={`relative max-w-xl px-4 py-4 rounded-xl bg-[white] flex items-start`}
      >
        <section className="flex flex-col">
          {<p className="text-xs text-[#182230] mb-2 font-bold text-blue-600">{!isUser ? "Najm Co-Pilot":"You"}</p>}
          <p className="text-sm text-gray-800 whitespace-pre-wrap">{text}</p>
        </section>
        {!isUser && (
          <button
            onClick={copyToClipboard}
            className="text-xs text-blue-600 font-semibold ml-4 cursor-pointer"
          >
            {copy ? "Copied" : "Copy"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
