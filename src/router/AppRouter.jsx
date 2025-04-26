import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/public/HomePage";
import { PublicLayout } from "../layouts/PublicLayout";
import { MenuPage } from "../pages/public/MenuPage";
import { GalleryPage } from "../pages/public/GalleryPage";
import { ReviewsPage } from "../pages/public/ReviewsPage";
import { ContactPage } from "../pages/public/ContactPage";
import { LoginPage } from "../pages/public/LoginPage";
import { CategoryPage } from "../pages/public/CategoryPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/carta" element={<MenuPage />} />
            <Route path="/carta/:categoryName" element={<CategoryPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/opiniones" element={<ReviewsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
