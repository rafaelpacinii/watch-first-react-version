import { useContext } from "react";
import { LoginContext, RegisterContext } from "../../App";
import { MenuContext } from ".";

export function NavLinks() {
  const [, setMenuIsOpen] = useContext(MenuContext);
  const [, setLoginModalIsOpen] = useContext(LoginContext);
  const [, setRegisterModalIsOpen] = useContext(RegisterContext);

  return (
    <ul>
      <li>
        <a href="/catalog">Catálogo</a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenuIsOpen(false);
            setRegisterModalIsOpen(true);
          }}
        >
          Testar Gratuitamente
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            setMenuIsOpen(false);
            setLoginModalIsOpen(true);
          }}
        >
          Entrar
        </a>
      </li>
    </ul>
  );
}
