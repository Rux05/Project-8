import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <NavLink to="/">
                accueil
            </NavLink>
            <NavLink to="/a-propos">
                apropos
            </NavLink>
        </div>
    )
}