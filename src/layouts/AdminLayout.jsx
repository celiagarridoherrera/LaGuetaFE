import { Outlet } from "react-router-dom";
import {AdminNavbar} from "../components/AdminNavbar";

export const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="relative z-10">
          <AdminNavbar />
            </header>
            <main className="flex-grow relative z-0 bg-bg-text-admin">
                <Outlet />
            </main>
        </div>
    )
}