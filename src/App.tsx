import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./contexts/user-context"
import { MENU_LIST } from "./settings/menu-settings"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {MENU_LIST.map((menu, index) => (
            <Route key={index} path={menu.path} element={menu.element} />
          ))}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )

}

export default App
