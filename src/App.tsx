import { BenefitsSection } from "./components/BenefitsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";

import { GlobalStyle } from "./styles/global";
import { GradientBackground } from "./styles/global";

export function App() {
  return (
    <>
      <GradientBackground>
        <Header />
        <IntroSection />
      </GradientBackground>

      <BenefitsSection />
      <Footer />
      <GlobalStyle />
    </>
  );
}
