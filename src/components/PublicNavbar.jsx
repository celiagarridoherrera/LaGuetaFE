import { NavLink } from "react-router-dom";
import { useState } from "react";
import beerDefault from "../assets/icons/beerDefault.svg";
import beerActive from "../assets/icons/beerActive.svg";

export const PublicNavbar = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <header className="bg-color1-public">
        <nav className="flex justify-between items-center px-10 py-5">
                <NavLink to="/" className={"-mb-28"}>
                <img src="/src/assets/images/laguetalogoPublic.svg" alt="Logo Naranja" className="h-42"/>
                </NavLink>

                <div className="flex gap-24 items-center">
                <NavLink to="/carta" className="text-text1-public font-primary text-2xl hover:text-text2-public">
                    CARTA
                </NavLink>
                <NavLink to="/galeria" className="text-text1-public font-primary text-2xl hover:text-text2-public">
                    GALERÍA
                </NavLink>
                <NavLink to="/opiniones" className="text-text1-public font-primary text-2xl hover:text-text2-public">
                    OPINIONES
                </NavLink>
                <NavLink to="/contacto" className="text-text1-public font-primary text-2xl hover:text-text2-public">
                    CONTACTO
                </NavLink>
                <NavLink to="/login"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="text-text1-public font-primary text-2xl">
                  <img src={hovered ? beerActive : beerDefault} alt="Login" className="w-12 h-12 transition-all duration-200"/>
                </NavLink>
            </div>
        </nav>
        </header>
    )
}
