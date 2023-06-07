import { useState, createContext } from "react";
import { LoginModal } from "../Modals/LoginModal";
import { RegisterModal } from "../Modals/RegisterModal";

export const LoginContext = createContext<[boolean, (isOpen: boolean) => void]>(
  {} as [boolean, (isOpen: boolean) => void]
);

export const RegisterContext = createContext<
  [boolean, (isOpen: boolean) => void]
>({} as [boolean, (isOpen: boolean) => void]);

export function NavLinks() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);

  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  function openRegisterModal() {
    setRegisterModalIsOpen(true);
  }

  return (
    <ul>
      <li>
        <a href="">Catálogo</a>
      </li>
      <li>
        <RegisterContext.Provider
          value={[registerModalIsOpen, setRegisterModalIsOpen]}
        >
          <a onClick={openRegisterModal}>Testar Gratuitamente</a>
          <RegisterModal />
        </RegisterContext.Provider>
      </li>
      <li>
        <LoginContext.Provider value={[loginModalIsOpen, setLoginModalIsOpen]}>
          <a onClick={openLoginModal}>Entrar</a>
          <LoginModal />
        </LoginContext.Provider>
      </li>
    </ul>
  );
}
