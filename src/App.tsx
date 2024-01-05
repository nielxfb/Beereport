import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user-context";
import { MENU_LIST } from "./settings/menu-settings";
import MainLayout from "./layouts/main-layout";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <MainLayout>
          <Routes>
            {MENU_LIST.map((menu, index) => (
              <Route key={index} path={menu.path} element={menu.element} />
            ))}
          </Routes>
        </MainLayout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
