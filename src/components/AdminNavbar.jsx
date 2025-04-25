import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

export const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-color1-admin w-full z-50 relative">
      <nav className="flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="-mb-20 z-50">
          <img
            src="/src/assets/images/laguetalogoAdmin.svg"
            alt="Logo Verde"
            className="h-24 sm:h-30 md:h-34 lg:h-40"
          />
        </NavLink>

        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="toggle menu">
            {isOpen ? (
              <HiX className="text-color2-admin text-[1.5rem] hover:text-text2-public" />
            ) : (
              <HiMenu className="text-color2-admin text-[1.5rem] hover:text-text2-public" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-16 items-center">
        <NavLink to="/carta-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            PRODUCTOS
          </NavLink>
          <NavLink to="/galeria-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/opiniones-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            OPINIONES
          </NavLink>
          <NavLink to="/cerrar-sesión" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            CERRAR SESIÓN
          </NavLink>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-color1-admin flex flex-col items-center gap-4 py-6 md:hidden z-40">
          <NavLink to="/carta-admin" className="text-color2-admin font-primary text-[1.125rem] hover:text-text2-public">
            PRODUCTOS
          </NavLink>
          <NavLink to="/galeria-admin" className="text-color2-admin  font-primary text-[1.125rem] hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/opiniones-admin" className="text-color2-admin  font-primary text-[1.125rem] hover:text-text2-public">
            OPINIONES
          </NavLink>
          <NavLink to="/cerrar-sesión" className="text-color2-admin font-primary text-[1.125rem] hover:text-text2-public">
            CERRAR SESIÓN
          </NavLink>
        </div>
      )}
    </header>
  );
};
