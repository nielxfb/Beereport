import { IChildren } from "../interfaces/children-interface";
import LoginBackground from "../../resources/LoginBackground.png";
import Background from "../../resources/Background.png";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../contexts/user-context";
import { useEffect } from "react";

function MainLayout({ children }: IChildren) {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isRoadmap = location.pathname === "/roadmap";

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {!isRoadmap && (
        <img
          src={isLoginPage ? LoginBackground : Background}
          alt="login-background"
          className="bg-[#f2f0ff]"
        />
      )}
      {children}
    </div>
  );
}

export default MainLayout;
