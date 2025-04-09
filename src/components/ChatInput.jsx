const ChatInput = () => {
    return (
      <div className="flex items-center p-4 bg-white rounded-xl shadow mt-10 w-full max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Ask Najm Co-Pilot"
          className="flex-1 px-4 py-2 outline-none text-gray-700"
        />
        <button className="text-gray-400 px-2">...</button>
        <button className="text-blue-500 px-2">🎤</button>
      </div>
    );
  };
  
  export default ChatInput;