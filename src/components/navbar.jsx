import NavButton from "./navButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavButton text="files" />
      <NavButton text="tasks" />
    </div>
  );
};

export default Navbar;
