import { useState } from "react";

import { Container } from "./styles";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo.svg";

export function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <a href="">
        <h1>
          <img src={logo} alt="Logo" />
          Watch First
        </h1>
      </a>

      <div className="menu-button">
        <Hamburger toggled={isOpen} toggle={setOpen} color="var(--white)" size={28} />
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Catálogo</a>
          </li>
          <li>
            <a href="">Testar Gratuitamente</a>
          </li>
          <li>
            <a href="">Entrar</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
