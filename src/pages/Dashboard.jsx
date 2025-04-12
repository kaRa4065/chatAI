import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ChatInput from "../components/ChatInput";
import ChatBubble from "../components/ChatBubble";
import PromptButtons from "../components/PromptButtons";
import star from "../assets/star.svg";
import useChat from "../hooks/useChat";
import LoadingBubble from "../components/LoadingBubble";

const Dashboard = () => {
  const { messages, sendMessage, clearMessages, error, loading } = useChat();
  const [users, setUsers] = useState([]);
  const [listAlign, setListAlign] = useState(false);

  const endOfMessagesRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#F4F8F7] overflow-auto" role="main">
        <Header />
        <section className="flex flex-col flex-1 overflow-auto">
          {!listAlign && (
            <>
              <div className="flex justify-center mt-4">
                <img className="mb-5 w-[25px]" src={star} alt="Star Icon" />
              </div>
              <h2 className="text-[17.5px] mb-1 text-center font-semibold">
                Hi, I’m Najm Co-Pilot
              </h2>
              <p className="text-sm text-[#667085] text-center mb-4">
                How can I help you?
              </p>
            </>
          )}

          <div className="flex flex-col sm:px-10 px-4">
            {messages.map((msg, i) => (
              <ChatBubble key={i} role={msg.role} text={msg.text} />
            ))}
            {loading && <LoadingBubble/>}
          </div>
          <div ref={endOfMessagesRef} />
        </section>
        <div className="sticky bottom-0 bg-[#F4F8F7] z-10 mx-5">
          <ChatInput
            onSend={sendMessage}
            loading={loading}
            clearMessages={clearMessages}
            error={error}
          />
          <PromptButtons onPrompt={sendMessage} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
