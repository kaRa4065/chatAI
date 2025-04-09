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
            className="border-[1px] border-[#EAECF0] px-3 py-1 rounded-md text-[10px] text-[#344054] font-semibold"
          >
            {btn}
          </button>
        ))}
      </div>
    );
  };
  
  export default ChatActions;