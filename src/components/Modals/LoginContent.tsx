import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons";
import { Container, Content } from "./styles";
import { LoginContext, RegisterContext } from "../../routes/Home";

export function LoginContent() {
  const [, setLoginModalIsOpen] = useContext(LoginContext);
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);
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
        <p>
          É novo por aqui?{" "}
          <a 
            onClick={() => {
              setLoginModalIsOpen(false);
              setRegisterModalIsOpen(true);
            }}
          >
            Registre-se.
          </a>
        </p>
      </Content>
    </Container>
  );
}
