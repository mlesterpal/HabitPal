import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import HabitsPage from "./../pages/HabitsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="habits" element={<HabitsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
