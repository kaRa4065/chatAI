import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import ChatActions from "../components/ChatActions";
import Header from "../components/Header";

const Dashboard = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 bg-[#F4F8F7] overflow-auto">
      <Header />
      <div className="mt-20 text-center">
        <div className="text-yellow-400 text-2xl mb-2">⭐</div>
        <h2 className="text-xl font-semibold">Hi, I’m Najm Co-Pilot</h2>
        <p className="text-sm text-gray-500">How can I help you?</p>
        <ChatInput />
        <ChatActions />
      </div>
    </div>
  </div>
);

export default Dashboard;
