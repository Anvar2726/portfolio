import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import HomePage from "./pages/public/home";
import LoginPage from "./pages/public/login";
import RegisterPage from "./pages/public/register";
import DashboardPage from "./pages/private/dashboard";
import EducationPage from "./pages/private/education";
import ExperincesPage from "./pages/private/experinces";
import MessagesPages from "./pages/private/messages";
import PortFoliosPage from "./pages/private/portfolios";
import SkillsPage from "./pages/private/skills";
import UsersPage from "./pages/private/users";
import PublicLayout from "./components/layout/public";
import AdminLayout from "./components/layout/private";

const App = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  console.log(isAuth, user);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

          <Route path="admin/" element={isAuth === true && user?.role === 'admin' ? <AdminLayout /> : <Navigate to="/login" /> }>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="experinces" element={<ExperincesPage />} />
            <Route path="messages" element={<MessagesPages />} />
            <Route path="portfolios" element={<PortFoliosPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
