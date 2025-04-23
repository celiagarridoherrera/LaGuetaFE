import { Outlet } from "react-router-dom";
import {PublicNavbar} from "../components/PublicNavbar";
import {Footer} from "../components/Footer";

export const PublicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
          <PublicNavbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}