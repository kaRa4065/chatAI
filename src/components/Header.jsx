import avatar from "../assets/avatar.svg";
import bell from "../assets/bell-01.svg";
import globe from "../assets/globe-01.svg";
import commIT from "../assets/comm-it.svg";
import overflow from "../assets/overflow.svg";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-6 px-6"
      role="banner"
    >
      <div className="sm:hidden text-sm flex items-center border-b-[1px] border-[#EAECF0] p-[12px]">
        <img
          className="font-bold text-xl mr-4"
          src={commIT}
          alt="Company Icon"
        />
        <p className="text-[#667085] text-xs" id="org-switch">
          Comm - IT
        </p>
      </div>
      <h1 className="text-2xl font-bold sm:block hidden">Najm Co-Pilot</h1>
      <div
        className="flex gap-4 items-center"
        role="navigation"
        aria-label="User actions"
      >
        <img src={bell} alt="Notifications" className="sm:block hidden" />
        <img src={globe} alt="Language selector" className="sm:block hidden" />
        <img src={avatar} alt="User profile" className="rounded-full" />
      </div>
    </header>
  );
};

export default Header;
