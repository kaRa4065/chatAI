import avatar from "../assets/avatar.svg";
import bell from "../assets/bell-01.svg";
import globe from "../assets/globe-01.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-6" role="banner">
      <h1 className="text-2xl font-bold">Najm Co-Pilot</h1>

      <div className="flex gap-4 items-center" role="navigation" aria-label="User actions">
        <img className="mb-5" src={bell} alt="Notifications" />
        <img className="mb-5" src={globe} alt="Language selector" />
        <img
          src={avatar}
          alt="User profile"
          className="rounded-full w-10 h-10"
        />
      </div>
    </header>
  );
};

export default Header;
