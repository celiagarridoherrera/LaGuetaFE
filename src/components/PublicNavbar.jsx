import { NavLink } from "react-router-dom";
import beerDefault from "../assets/icons/beerDefault.svg";
import beerActive from "../assets/icons/beerActive.svg";

export const PublicNavbar = () => {
    const navLinkStyle = ({ isActive }) => 
        isActive 
            ? "text-text1-public font-primary text-2xl hover:text2-public"
            : "text-text2-public font-primary text-2xl";

    return (
        <header className="bg-color1-public">
        <nav className="flex justify-between items-center px-6 py-4">
                <NavLink to="/">
                <img src="/src/assets/images/laguetalogoPublic.svg" alt="Logo Naranja" className="h-14"/>
                </NavLink>

                <div className="flex gap-8 items-center">
                <NavLink to="/carta" className={navLinkStyle}>
                    CARTA
                </NavLink>
                <NavLink to="/galeria" className={navLinkStyle}>
                    GALERÍA
                </NavLink>
                <NavLink to="/opiniones" className={navLinkStyle}>
                    OPINIONES
                </NavLink>
                <NavLink to="/contacto" className={navLinkStyle}>
                    CONTACTO
                </NavLink>
                <NavLink to="/login" className={navLinkStyle}>
                {({ isActive }) => (
                    <img
                        src={isActive ? beerActive : beerDefault}
                        alt="Login"
                        className="w-6 h-6"/>
                )}
                </NavLink>
            </div>
        </nav>
        </header>
    )
}
