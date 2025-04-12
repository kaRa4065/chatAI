import { useState } from "react";
import send from "../assets/send.svg";

const ChatInput = ({ onSend, loading, clearMessages, error }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(input);
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center p-4 rounded-lg   gap-2 max-w-[880px] mx-auto bg-[white] mb-2 mt-10"
        style={{
          boxShadow:
            "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        }}
      >
        <textarea
          className=" scrollbar-hide flex-1 placeholder-[#667085] focus:border-none  border-none rounded-lg px-3 py-5 text-[16px] focus:outline-none focus:ring-0 "
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <section className="flex items-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#E3F3FF] cursor-pointer px-3 py-3 rounded-full"
        >
          {loading ? "..." : <img src={send} className="w-[19px] h-[18px]" />}
        </button>
        <div className="px-4">
          <button
            onClick={clearMessages}
            type="button"
            className="text-xs  cursor-pointer bg-[#E3F3FF] p-2 font-semibold rounded-md text-[#0365D6]"
          >
            Clear Chat
          </button>
        </div>
        </section>
      </form>
      <div className="max-w-[880px] mx-auto mb-5">
        {error && <p className="text-red-500 text-xs px-4">{error}</p>}
      </div>
    </>
  );
};

export default ChatInput;
