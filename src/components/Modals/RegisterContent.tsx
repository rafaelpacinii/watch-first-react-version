import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Content } from "./styles";
import { LoginContext, RegisterContext } from "../../routes/Home";

export function RegisterContent() {
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);
  const [, setLoginModalIsOpen] = useContext(LoginContext);

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
        <p>
          Já é da casa?{" "}
          <a
            onClick={() => {
              setRegisterModalIsOpen(false);
              setLoginModalIsOpen(true);
            }}
          >
            Entre.
          </a>
        </p>
      </Content>
    </Container>
  );
}
