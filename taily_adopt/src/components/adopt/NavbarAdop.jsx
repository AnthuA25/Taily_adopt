import "../../styles/adopt/NavbarAdop.css";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";


export const NavbarAdop = () => {
  return (
    <div className="navbar">
      <div className="logoNav">
        <img src={logo} alt="" />
      </div>
      <div className="allNav">
        <h3>Mascotas</h3>
        <h3>Favoritos</h3>
        <FaUserCircle className="logoicon"/>
      </div>
    </div>
  );
};
