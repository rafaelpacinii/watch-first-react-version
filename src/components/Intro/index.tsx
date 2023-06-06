import { PosterCarousel } from "../PosterCarousel";
import { Container } from "./styles";

export function Intro() {
  return (
    <Container>
      <div className="text-container">
        <h2>Assista de tudo, primeiro que todos</h2>
        <p>
          A sua nova e melhor plataforma de streaming de filmes, lançados em
          tempo recorde após a exibição nos cinemas.
        </p>
        <div className="buttons-container">
          <button type="button">Já possui uma conta? Entre</button>
          <p className="default-p">ou</p>
          <button type="button">Registre-se</button>
        </div>
      </div>
      <PosterCarousel />
    </Container>
  );
}
