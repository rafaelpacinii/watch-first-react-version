import { useState, createContext } from "react";
import { Container } from "./styles";
import Hamburger from "hamburger-react";
import logo from "../../assets/logo.svg";
import { NavBar } from "./NavBar";
import { Padding } from "../../styles/global";

export const MenuContext = createContext<[boolean, (isOpen: boolean) => void]>(
  {} as [boolean, (isOpen: boolean) => void]
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState(
    window.innerWidth > 665 ? "desktop" : "mobile"
  );

  const buttonPosition = isOpen ? "fixed" : "absolute";
  window.addEventListener("resize", () => {
    if (window.innerWidth > 665) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  });

  return (
    <MenuContext.Provider value={[isOpen, setIsOpen]}>
      <Padding>
        <Container>
          <a href="/">
            <h1>
              <img src={logo} alt="Logo" />
              Watch First
            </h1>
          </a>

          <div className={"menu-button " + buttonPosition}>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="var(--white)"
              size={28}
            />
          </div>
          <NavBar currentDevice={device} />
        </Container>
      </Padding>
    </MenuContext.Provider>
  );
}
