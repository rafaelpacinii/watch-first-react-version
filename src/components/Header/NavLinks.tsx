import { useContext } from "react";
import { LoginModal } from "../Modals/LoginModal";
import { RegisterModal } from "../Modals/RegisterModal";
import { LoginContext, RegisterContext } from "../../App";

export function NavLinks() {
  const [, setLoginModalIsOpen] = useContext(LoginContext);
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);

  return (
    <ul>
      <li>
        <a href="">Catálogo</a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            setRegisterModalIsOpen(true);
          }}
        >
          Testar Gratuitamente
        </a>
        <RegisterModal />
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            setLoginModalIsOpen(true);
          }}
        >
          Entrar
        </a>
        <LoginModal />
      </li>
    </ul>
  );
}
