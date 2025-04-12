const LoadingBubble = () => {
    return (
      <div className="flex justify-start px-2 mb-2">
        <section className="flex flex-col bg-white rounded-lg px-4 py-3 shadow-sm max-w-xs">
          <p className="text-xs text-[#182230] mb-2 font-bold text-blue-600">Najm Co-Pilot</p>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
          </div>
        </section>
      </div>
    );
  };
  
  export default LoadingBubble;