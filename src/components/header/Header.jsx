import { NavLink } from "react-router-dom";
import "./header.scss";
import Logo from "../logo/Logo";
import ImgLogoHeader from "./../../assets/logo/LOGO.png";

export default function Header() {
  console.log(ImgLogoHeader);
  return (
    <div className="header-container">
      <Logo img={ImgLogoHeader} />
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
