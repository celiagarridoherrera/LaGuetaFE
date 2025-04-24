import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          {/* Página de prueba para ver el layout funcionando */}
          <Route index element={<h1 className="text-3xl text-center mt-10">Bienvenida a La Gueta 🍻</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
