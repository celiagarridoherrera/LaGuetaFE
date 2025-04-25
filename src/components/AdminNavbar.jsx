import { NavLink } from "react-router-dom";

export const AdminNavbar = () => {

    return (
        <header className="bg-color1-admin">
        <nav className="flex justify-between items-center px-6 py-4">
                <NavLink to="/" className={"-mb-28 ml-7"}>
                <img src="/src/assets/images/laguetalogoAdmin.svg" alt="Logo Verde" className="h-42"/>
                </NavLink>

                <div className="flex gap-24 mr-8 items-center">
                <NavLink to="/productos-admin" className="text-color2-admin font-primary sm:text-[1.125rem] lg:text-[1.5rem] hover:text-text2-public">
                    PRODUCTOS
                </NavLink>
                <NavLink to="/galeria-admin" className="text-color2-admin font-primary sm:text-[1.125rem] lg:text-[1.5rem] hover:text-text2-public">
                    GALERÍA
                </NavLink>
                <NavLink to="/opiniones-admin" className="text-color2-admin font-primary sm:text-[1.125rem] lg:text-[1.5rem] hover:text-text2-public">
                    OPINIONES
                </NavLink>
                <NavLink to="/cerrar-sesion" className="text-color2-admin font-primary sm:text-[1.125rem] lg:text-[1.5rem] hover:text-text2-public">
                    CERRAR SESIÓN
                </NavLink>
            </div>
        </nav>
        </header>
    )
}