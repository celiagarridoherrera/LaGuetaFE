import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import beerDefault from "../assets/icons/beerDefault.svg";
import beerActive from "../assets/icons/beerActive.svg";

export const PublicNavbar = () => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-color1-public w-full z-50 relative">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 w-full">
        <NavLink to="/" className="-mb-20 z-50">
          <img
            src="/src/assets/images/laguetalogoPublic.svg"
            alt="Logo Naranja"
            className="h-24 sm:h-30 md:h-34 lg:h-40"
          />
        </NavLink>

        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="toggle menu">
            {isOpen ? (
              <HiX className="text-text1-public text-2xl hover:text-text2-public" />
            ) : (
              <HiMenu className="text-text1-public text-2xl hover:text-text2-public" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-16 items-center">
          <NavLink to="/carta" className="text-text1-public font-primary text-[1.5rem] hover:text-text2-public">
            CARTA
          </NavLink>
          <NavLink to="/galeria" className="text-text1-public font-primary text-[1.5rem] hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/opiniones" className="text-text1-public font-primary text-[1.5rem] hover:text-text2-public">
            OPINIONES
          </NavLink>
          <NavLink to="/contacto" className="text-text1-public font-primary text-[1.5rem] hover:text-text2-public">
            CONTACTO
          </NavLink>
          <NavLink
            to="/login"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={hovered ? beerActive : beerDefault} alt="Login" className="w-10 h-10 transition-all duration-200"/>
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-color1-public flex flex-col items-center gap-8 py-10 z-40 transition-all duration-300">
          <NavLink to="/carta" onClick={toggleMenu} className="text-text1-public font-primary text-2xl hover:text-text2-public">
            CARTA
          </NavLink>
          <NavLink to="/galeria" onClick={toggleMenu} className="text-text1-public font-primary text-2xl hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/opiniones" onClick={toggleMenu} className="text-text1-public font-primary text-2xl hover:text-text2-public">
            OPINIONES
          </NavLink>
          <NavLink to="/contacto" onClick={toggleMenu} className="text-text1-public font-primary text-2xl hover:text-text2-public">
            CONTACTO
          </NavLink>
          <NavLink
            to="/login"
            onClick={toggleMenu}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={hovered ? beerActive : beerDefault} alt="Login" className="w-10 h-10 transition-all duration-200"/>
          </NavLink>
        </div>
      )}
    </header>
  );
};
