import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";

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
];
