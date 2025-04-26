import { Outlet } from "react-router-dom";
import {PublicNavbar} from "../components/PublicNavbar";
import {Footer} from "../components/Footer";

export const PublicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="relative z-10">
          <PublicNavbar />
            </header>
            <main className="flex-grow bg-bg-public flex flex-col items-center justify-start">
              <Outlet />
            </main>
            <Footer />
        </div>
    )
}