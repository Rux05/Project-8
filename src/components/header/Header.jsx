import { NavLink } from "react-router-dom";
import "./header.scss";

// export default function Header() {
//   return (
//     <div className="navlink-container">
//       <img src="./logo.png" className="logo" alt="Logo"></img>
//       <div className="navlink-text">
//       <NavLink to="/">
//         Accueil</div>
//       </NavLink>
//       <NavLink to="/a-propos">
//         A Propos
//       </NavLink>
//       </div>
//     </div>
//   );
// }

export default function Header() {
  return (
    <div className="header-container">
      <img src="./logo.png" className="logo" alt="Logo" />
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
