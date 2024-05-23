import { UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import DashboardPage from "../pages/private/dashboard";
import EducationPage from "../pages/private/education";
import ExperincesPage from "../pages/private/experinces";
import MessagesPages from "../pages/private/messages";
import PortFoliosPage from "../pages/private/portfolios";
import SkillsPage from "../pages/private/skills";
import UsersPage from "../pages/private/users";

const useRolePage = () => {
  const { user } = useSelector((state) => state.auth);

  const clientPages = [
    {
      key: "dashboard",
      element: DashboardPage,
      icon: UploadOutlined,
    },
    {
      key: "education",
      element: EducationPage,
      icon: UploadOutlined,
    },
    {
      key: "experinces",
      element: ExperincesPage,
      icon: UploadOutlined,
    },
    {
      key: "messages",
      element: MessagesPages,
      icon: UploadOutlined,
    },
    {
      key: "portfolios",
      element: PortFoliosPage,
      icon: UploadOutlined,
    },
    {
      key: "skills",
      element: SkillsPage,
      icon: UploadOutlined,
    },
  ];

 

  const adminPages = clientPages.concat({
    key: "users",
    element: UsersPage,
    icon: UploadOutlined,
  });
  console.log();

  return user?.role === "admin" ? adminPages : clientPages;
};

export default useRolePage;
