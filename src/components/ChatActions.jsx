const ChatActions = () => {
    const buttons = [
      "Show my Pay slips",
      "Salary Breakdown",
      "Pay slips History",
      "Payment Details",
    ];
    return (
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="border px-3 py-1 rounded-md text-sm bg-white hover:bg-gray-100"
          >
            {btn}
          </button>
        ))}
      </div>
    );
  };
  
  export default ChatActions;