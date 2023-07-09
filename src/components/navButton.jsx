import "../App.css";

const NavButton = ({ text, onClick }) => {
  return (
    <button className="navbar__button" onClick={onClick}>
      {text}
    </button>
  );
};

export default NavButton;
