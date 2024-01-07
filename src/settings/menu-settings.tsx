import AddScorePage from "../pages/add-score-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import RoadmapPage from "../pages/roadmap-page";
import UpdateScorePage from "../pages/update-score-page";

export interface IMenu {
  element: JSX.Element;
  name: string;
  path: string;
}

export const MENU_LIST: IMenu[] = [
  {
    element: <LoginPage />,
    name: "Login",
    path: "/",
  },
  {
    element: <RegisterPage />,
    name: "Register",
    path: "/register",
  },
  {
    element: <HomePage />,
    name: "Home",
    path: "/home-page",
  },
  {
    element: <AddScorePage />,
    name: "Add Score",
    path: "/add-score",
  },
  {
    element: <UpdateScorePage />,
    name: "Update Score",
    path: "/update-score",
  },
  {
    element: <RoadmapPage />,
    name: "Roadmap",
    path: "/roadmap",
  },
];
