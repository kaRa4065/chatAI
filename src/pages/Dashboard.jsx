import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatInput from "../components/ChatInput";
import ChatActions from "../components/ChatActions";
import Header from "../components/Header";
import star from "../assets/star.svg";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [listAlign, setListAlign] = useState(false);

  const handleSearch = async (input) => {
    try {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setUsers(data.data);
      setListAlign(true);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-[#F4F8F7] overflow-auto " role="main">
        <Header />

        <section
          className={`flex ${
            listAlign ? "items-start" : "itmes-center"
          }  flex-col items-center overflow-x-hidden`}
          aria-labelledby="chat-welcome"
        >
          <div className={`${listAlign ? "hidden" : "flex"}  justify-center`}>
            <img className="mb-5 w-[25px]" src={star} alt="Star Icon" />
          </div>
          <h2
            id="chat-welcome"
            className={`${
              listAlign ? "w-full text-left ml-20 mt-5" : ""
            } "text-[17.5px] mb-3 font-semibold "`}
          >
            Hi, I’m Najm Co-Pilot
          </h2>
          <p className={`${listAlign && "hidden"} text-sm text-[#667085] mb-4`}>
            How can I help you?
          </p>
          {users.length > 0 && (
  <div className="w-full px-5 sm:px-0 flex justify-center mx-2">
    <div className="overflow-x-auto bg-white shadow rounded p-4 mb-4 w-full max-w-2xl">
      <h3 className="mb-4 text-sm text-start">Users details</h3>
      <table className="min-w-full text-sm text-left text-[#344054] border border-[#EAECF0]">
        <thead className="text-xs uppercase text-[#667085] bg-[#F9FAFB] border-b border-b-[#EAECF0]">
          <tr>
            <th scope="col" className="px-4 py-4">Avatar</th>
            <th scope="col" className="px-4 py-4">First Name</th>
            <th scope="col" className="px-4 py-4">Last Name</th>
            <th scope="col" className="px-4 py-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-b-[#EAECF0] last:border-none">
              <td className="px-4 py-2">
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-8 h-8 rounded-full"
                />
              </td>
              <td className="px-4 py-2 text-[12px] text-[#475467]">{user.first_name}</td>
              <td className="px-4 py-2 text-[12px] text-[#475467]">{user.last_name}</td>
              <td className="px-4 py-2 text-[12px] text-[#475467]">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

        </section>
        <ChatInput onSubmit={handleSearch} />
        <ChatActions />
      </main>
    </div>
  );
};

export default Dashboard;
