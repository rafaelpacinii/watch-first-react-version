import { createContext, useState } from "react";
import { BenefitsSection } from "./components/BenefitsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { LoginModal } from "./components/Modals/LoginModal";
import { RegisterModal } from "./components/Modals/RegisterModal";

import { GlobalStyle } from "./styles/global";
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
    <>
      <LoginContext.Provider value={[loginModalIsOpen, setLoginModalIsOpen]}>
        <RegisterContext.Provider
          value={[registerModalIsOpen, setRegisterModalIsOpen]}
        >
          <LoginModal />
          <RegisterModal />
          <GradientBackground>
            <Header />
            <IntroSection />
          </GradientBackground>

          <BenefitsSection />
          <Footer />
          <GlobalStyle />
        </RegisterContext.Provider>
      </LoginContext.Provider>
    </>
  );
}
