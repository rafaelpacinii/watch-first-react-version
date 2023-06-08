import { PosterCarousel } from "../PosterCarousel";
import { Container } from "./styles";
import { LoginContext, RegisterContext } from "../../App";
import { useContext } from "react";
import { Padding } from "../../styles/global";

export function IntroSection() {
  const [, setLoginModalIsOpen] = useContext(LoginContext);
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);

  return (
    <Padding>
      <Container>
        <div className="text-container">
          <h2>Assista de tudo, primeiro que todos</h2>
          <p>
            A sua nova e melhor plataforma de streaming de filmes, lançados em
            tempo recorde após a exibição nos cinemas.
          </p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setLoginModalIsOpen(true);
              }}
            >
              Já possui uma conta? Entre
            </button>
            <p className="default-p">ou</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setRegisterModalIsOpen(true);
              }}
            >
              Registre-se
            </button>
          </div>
        </div>
        <PosterCarousel />
      </Container>
    </Padding>
  );
}
