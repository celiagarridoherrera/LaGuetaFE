import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from "../pages/public/HomePage";
import { PublicLayout } from "../layouts/PublicLayout";
import { MenuPage } from "../pages/public/MenuPage";
import { GalleryPage } from "../pages/public/GalleryPage";
import { ReviewsPage } from "../pages/public/ReviewsPage";
import { ContactPage } from "../pages/public/ContactPage";
import { LoginPage } from "../pages/public/LoginPage";
import { CategoryPage } from "../pages/public/CategoryPage";

import { AdminRoute } from "./AdminRoute";
import { AdminLayout } from "../layouts/AdminLayout";
import { DashboardAdmin } from "../pages/admin/DashboardAdmin";
import { ProductsAdmin } from "../pages/admin/ProductsAdmin";
import { GalleryAdmin } from "../pages/admin/GalleryAdmin";
import { ReviewsAdmin } from "../pages/admin/ReviewsAdmin";
import { AuthProvider } from "../context/AuthContext";

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="carta" element={<MenuPage />} />
            <Route path="carta/:categoryName" element={<CategoryPage />} />
            <Route path="galeria" element={<GalleryPage />} />
            <Route path="opiniones" element={<ReviewsPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<DashboardAdmin />} />
            <Route path="productos-admin" element={<ProductsAdmin />} />
            <Route path="galeria-admin" element={<GalleryAdmin />} />
            <Route path="opiniones-admin" element={<ReviewsAdmin />} />
          </Route>
        </Routes>
        <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>

    </>
  );
};
