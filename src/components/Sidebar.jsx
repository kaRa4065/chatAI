import logo from "../assets/Sahab-Logo.svg";
import search from "../assets/Icon.svg";
import layout from "../assets/layout-left.svg";
import commIT from "../assets/comm-it.svg";
import diff from "../assets/diff.svg";
import message from "../assets/message.svg";

const Sidebar = () => (
  <aside className="w-72 h-screen bg-white p-5 shadow">
    <div className="flex justify-between">
      <img className="font-bold text-xl mb-5" src={logo} />
      <div className="flex justify-between">
        <img className="font-bold text-xl mb-5 mr-4" src={search} />
        <img className="font-bold text-xl mb-5" src={layout} />
      </div>
    </div>
    <div className="border-[1px] border-[#EAECF0]  rounded-md mb-4">
      <div className="text-sm flex items-center border-b-[1px] border-[#EAECF0] w-full p-[12px]">
        <img className="font-bold text-xl mr-4" src={commIT} />
        <p className="text-[#667085] text-xs ">Comm - IT India Pvt Ltd</p>
      </div>
      <div className="text-sm flex items-center w-full p-[12px]">
        <img className="font-bold text-xl mr-5" src={diff} />
        <button className="text-[#667085] text-xs ">Switch to Portal</button>
      </div>
    </div>
    <button className="mb-5  px-4 py-2 rounded w-full">
      <img className="font-bold text-xl mr-5" src={message} />+ New Chat
    </button>
    <p className="text-gray-400 mb-6">No Chat History</p>
    <div className="border-t pt-4 text-sm">
      <p className="mb-2">👤 My Info</p>
      <p className="mb-2">📥 Inbox</p>
      <p className="mb-2">✅ My Approval</p>
    </div>
  </aside>
);

export default Sidebar;
