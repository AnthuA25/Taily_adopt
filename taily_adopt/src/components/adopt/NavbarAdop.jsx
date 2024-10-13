import "../../styles/adopt/NavbarAdop.css";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

export const NavbarAdop = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logoNav">
        <Link to="/adoptante">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="allNav">
        <h3>Mascotas</h3>
        <h3>Favoritos</h3>
        <FaUserCircle className="logoicon" />
        <CiLogout className="logout" onClick={handleLogout} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};
