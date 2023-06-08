import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GradientBackground } from "./styles/global";

export const LoginContext = createContext<[boolean, (isOpen: boolean) => void]>(
  {} as [boolean, (isOpen: boolean) => void]
);

export const RegisterContext = createContext<
  [boolean, (isOpen: boolean) => void]
>({} as [boolean, (isOpen: boolean) => void]);

export function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  return (
    <LoginContext.Provider value={[loginModalIsOpen, setLoginModalIsOpen]}>
      <RegisterContext.Provider
        value={[registerModalIsOpen, setRegisterModalIsOpen]}
      >
        <GradientBackground>
          <Header />
          <Outlet />
        </GradientBackground>
        <Footer />
      </RegisterContext.Provider>
    </LoginContext.Provider>
  );
}
