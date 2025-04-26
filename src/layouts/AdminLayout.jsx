import { Outlet } from "react-router-dom";
import {AdminNavbar} from "../components/AdminNavbar";

export const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="relative z-10">
          <AdminNavbar />
            </header>
            <main className="flex-grow bg-bg-text-admin flex flex-col items-center justify-start pt-24 px-4">
                <Outlet />
            </main>
        </div>
    )
}