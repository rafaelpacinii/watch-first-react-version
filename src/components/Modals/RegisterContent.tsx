import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Content } from "./styles";
import { RegisterContext } from "../Header/NavLinks";

export function RegisterContent() {
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);

  return (
    <Container>
      <button
        type="button"
        className="close-button"
        onClick={() => {
          setRegisterModalIsOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <Content>
        <h2>Criar uma Conta</h2>
        <div className="inputbox">
          <FontAwesomeIcon className="icon" icon={faUser} />
          <input type="text" required />
          <label htmlFor="">Nome de Usuário</label>
        </div>
        <div className="inputbox">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <input type="text" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <input type="password" required />
          <label htmlFor="">Senha</label>
        </div>
        <button type="button">Continuar</button>
        <div className="change-form">
          <p>
            Já é da casa?{" "}
            <a href="#login" className="to-overlay-form underline">
              Entre.
            </a>
          </p>
        </div>
      </Content>
    </Container>
  );
}
