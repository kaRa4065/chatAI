const PromptButtons = ({ onPrompt }) => {
  const prompts = ["Tell me a joke", "Give me a summary", "What’s trending?"];
  return (
    <div className="flex gap-2 mb-4 px-4 justify-center">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onPrompt(prompt)}
          className="cursor-pointer border-[1px] border-[#EAECF0] px-3 py-1 rounded-md text-[10px] text-[#344054] font-semibold"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptButtons;
