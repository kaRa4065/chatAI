import logo from "../assets/Sahab-Logo.svg";
import search from "../assets/Icon.svg";
import layout from "../assets/layout-left.svg";
import commIT from "../assets/comm-it.svg";
import diff from "../assets/diff.svg";
import message from "../assets/message.svg";
import profile from "../assets/profile.svg";
import inbox from "../assets/inbox.svg";
import approval from "../assets/approval.svg";

const Sidebar = () => (
  <aside
    className="w-72 h-screen bg-white p-5 shadow sm:block hidden"
    aria-label="Sidebar Navigation"
  >
    <header className="flex justify-between">
      <img className="font-bold text-xl mb-5" src={logo} alt="Company Logo" />
      <div className="flex justify-between">
        <img
          className="font-bold text-xl mb-5 mr-4"
          src={search}
          alt="Search"
        />
        <img
          className="font-bold text-xl mb-5"
          src={layout}
          alt="Layout Toggle"
        />
      </div>
    </header>
    <section
      className="border-[1px] border-[#EAECF0]  rounded-md mb-4 mt-5"
      aria-labelledby="org-switch"
    >
      <div className="text-sm flex items-center border-b-[1px] border-[#EAECF0] w-full p-[12px]">
        <img
          className="font-bold text-xl mr-4"
          src={commIT}
          alt="Company Icon"
        />
        <p className="text-[#667085] text-xs" id="org-switch">
          Comm - IT India Pvt Ltd
        </p>
      </div>
      <div className="text-sm flex items-center w-full p-[12px]">
        <img className="font-bold text-xl mr-5" src={diff} alt="Switch Icon" />
        <button
          className="text-[#667085] text-xs"
          aria-label="Switch to Portal"
        >
          Switch to Portal
        </button>
      </div>
    </section>

    <nav aria-label="Start new chat">
      <button
        className="px-3 my-3 py-2 rounded w-full flex items-center"
        aria-label="Start New Chat"
      >
        <img
          className="font-bold text-xl mr-2"
          src={message}
          alt="New Chat Icon"
        />
        <span className="text-[14px] text-[#182230]">New Chat</span>
      </button>
    </nav>

    <nav
      className="border-t border-[#EAECF0] pt-4 text-sm px-3"
      aria-label="Explore Navigation"
    >
      <h5 className="text-[#667085] text-xs mb-4">Explore</h5>

      <ul className="space-y-5">
        <li>
          <a href="#" className="flex items-center text-[14px] text-[#182230]">
            <img
              className="font-bold text-xl mr-2"
              src={profile}
              alt="My Info Icon"
            />
            <span>My Info</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-[14px] text-[#182230]">
            <img
              className="font-bold text-xl mr-2"
              src={inbox}
              alt="Inbox Icon"
            />
            <span>Inbox</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center text-[14px] text-[#182230]">
            <img
              className="font-bold text-xl mr-2"
              src={approval}
              alt="My Approval Icon"
            />
            <span>My Approval</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
