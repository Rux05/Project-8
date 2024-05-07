import { NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../logo/Logo";
import ImgLogo from "./../../assets/logo/LOGO.png";

export default function Header() {
  return (
    <div className="header-container">
      <Logo img={ImgLogo} />
      {/* <img src="./LOGO.png" className="logo" alt="Logo" /> */}
      <div className="navlink-container">
        <NavLink to="/" className="navlink-text">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="navlink-text">
          A Propos
        </NavLink>
      </div>
    </div>
  );
}
