import { Container } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <a href="">
        <h1>
          <img src={logo} alt="Logo" />
          Watch First
        </h1>
      </a>
    </Container>
  );
}
