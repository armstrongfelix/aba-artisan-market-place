import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import MarketplacePage from "../pages/Marketplace";
import ArtisanProfilePage from "../pages/ArtisanProfile";
import BookingWizardPage from "../pages/BookingWizard";
import DashboardPage from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
      <Route path="/book/:artisanId" element={<BookingWizardPage />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
