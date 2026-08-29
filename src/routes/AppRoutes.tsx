import { Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import HabitsPage from "./../pages/HabitsPage";
import DashboardPage from "../pages/DashboardPage";
import ExerciseTypesPage from "../pages/ExerciseTypesPage";
import ExerciseTypePage from "../pages/ExerciseTypePage";
import WeightLiftingPage from "../pages/WeightLiftingPage";
import MuscleGroupPage from "../pages/MuscleGroupPage";
import MusclePartPage from "../pages/MusclePartPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/habits" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="habits" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dashboard/exercise" element={<ExerciseTypesPage />} />
        <Route
          path="dashboard/exercise/weight-lifting"
          element={<WeightLiftingPage />}
        />
        <Route
          path="dashboard/exercise/weight-lifting/:muscleGroup"
          element={<MuscleGroupPage />}
        />
        <Route
          path="dashboard/exercise/weight-lifting/:muscleGroup/:musclePart"
          element={<MusclePartPage />}
        />
        <Route
          path="dashboard/exercise/:exerciseType"
          element={<ExerciseTypePage />}
        />
        <Route path="habits" element={<HabitsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
