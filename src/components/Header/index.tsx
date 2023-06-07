import { useState, createContext } from "react";
import { Container } from "./styles";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo.svg";
import { NavBar } from "./NavBar";

export const MenuContext = createContext<[boolean, (isOpen:boolean) => void]>(
  {} as [boolean, (isOpen:boolean) => void]
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={[isOpen, setIsOpen]}
    >
      <Container>
        <a href="">
          <h1>
            <img src={logo} alt="Logo" />
            Watch First
          </h1>
        </a>

        <div className="menu-button">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color="var(--white)"
            size={28}
          />
        </div>
        <NavBar />
      </Container>
    </MenuContext.Provider>
  );
}
