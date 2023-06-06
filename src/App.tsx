import { Header } from "./components/Header";
import { Intro } from "./components/Intro";

import { GlobalStyle } from "./styles/global";
import { GradientBackground } from "./styles/global";

export function App() {
  return (
    <>
      <GradientBackground>
        <Header />
        <Intro />
      </GradientBackground>

      <GlobalStyle />
    </>
  );
}
