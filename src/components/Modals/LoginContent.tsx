import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons";
import { Container, Content } from "./styles";
import { LoginContext } from "../Header/NavLinks";

export function LoginContent() {
  const [, setLoginModalIsOpen] = useContext(LoginContext);

  return (
    <Container>
      <button
        type="button"
        className="close-button"
        onClick={() => {
          setLoginModalIsOpen(false);
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <Content>
        <h2>Login</h2>
        <div className="inputbox">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <input type="email" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          <FontAwesomeIcon className="icon" icon={faLock} />
          <input type="password" required />
          <label htmlFor="">Senha</label>
        </div>
        <a href="#">Esqueci meus dados de login.</a>
        <button type="button">Entrar</button>
        <div className="change-form">
          <p>
            É novo por aqui? <a href="#">Registre-se.</a>
          </p>
        </div>
      </Content>
    </Container>
  );
}
