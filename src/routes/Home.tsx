import { BenefitsSection } from "../components/BenefitsSection";
import { IntroSection } from "../components/IntroSection";
import { LoginModal } from "../components/Modals/LoginModal";
import { RegisterModal } from "../components/Modals/RegisterModal";

import { GlobalStyle } from "../styles/global";

export function Home() {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <IntroSection />
      <BenefitsSection />
      <GlobalStyle />
    </>
  );
}
