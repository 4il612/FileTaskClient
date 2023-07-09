import NavButton from "./navButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <NavButton
        text="files"
        onClick={() => {
          navigate("/files");
        }}
      />
      <NavButton
        text="tasks"
        onClick={() => {
          navigate("/tasks");
        }}
      />
    </div>
  );
};

export default Navbar;
