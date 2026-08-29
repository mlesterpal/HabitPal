import { Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import HabitsPage from "./../pages/HabitsPage";
import DashboardPage from "../pages/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/habits" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="habits" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="habits" element={<HabitsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
