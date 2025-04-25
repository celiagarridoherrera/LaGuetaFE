import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/public/HomePage";
import { PublicLayout } from "../layouts/PublicLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
