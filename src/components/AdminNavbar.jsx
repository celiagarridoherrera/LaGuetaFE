import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";

export const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="bg-color1-admin w-full z-50 relative">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 w-full">
        <NavLink to="/admin" className="-mb-20 z-50">
          <img
            src="/src/assets/images/laguetalogoAdmin.svg"
            alt="Logo Verde"
            className="h-24 sm:h-30 md:h-34 lg:h-40"
          />
        </NavLink>

        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} aria-label="toggle menu">
            {isOpen ? (
              <HiX className="text-color2-admin text-2xl hover:text-text2-public" />
            ) : (
              <HiMenu className="text-color2-admin text-2xl hover:text-text2-public" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-16 items-center">
          <NavLink to="/admin/productos-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            PRODUCTOS
          </NavLink>
          <NavLink to="/admin/galeria-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/admin/opiniones-admin" className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public">
            OPINIONES
          </NavLink>
          {/* Botón Cerrar Sesión */}
          <button
            onClick={handleLogout}
            className="text-color2-admin font-primary text-[1.5rem] hover:text-text2-public"
          >
            CERRAR SESIÓN
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-color1-admin flex flex-col items-center gap-8 py-10 z-40 transition-all duration-300">
          <NavLink to="/admin/productos-admin" onClick={toggleMenu} className="text-color2-admin font-primary text-2xl hover:text-text2-public">
            PRODUCTOS
          </NavLink>
          <NavLink to="/admin/galeria-admin" onClick={toggleMenu} className="text-color2-admin font-primary text-2xl hover:text-text2-public">
            GALERÍA
          </NavLink>
          <NavLink to="/admin/opiniones-admin" onClick={toggleMenu} className="text-color2-admin font-primary text-2xl hover:text-text2-public">
            OPINIONES
          </NavLink>
          <button
            onClick={() => {
              toggleMenu();
              handleLogout();
            }}
            className="text-color2-admin font-primary text-2xl hover:text-text2-public"
          >
            CERRAR SESIÓN
          </button>
        </div>
      )}
    </header>
  );
};
