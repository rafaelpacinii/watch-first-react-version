import { useContext, useState } from "react";
import Modal from "react-modal";
import { NavLinks } from "./NavLinks";
import { MenuContext } from ".";
import { CommonNavStyles, MobileNav } from "./styles";

Modal.setAppElement("#root");

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useContext(MenuContext);
  const [isMobile, setIsMobile] = useState(true);

  window.addEventListener("resize", () =>{
    if(window.innerWidth > 665){
      setIsMobile(false)
    } else{
      setIsMobile(true);
    }
  });

  const customStyles = {
    content: {
      top: "0",
      left: "auto",
      right: "0",
      bottom: "0",
      backgroundColor: "var(--grey)",
      borderRadius: "none",
      display: isMobile ? "block" : "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: isMobile ? "block" : "none",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <CommonNavStyles>
        <MobileNav className="mobile-navbar">
          <NavLinks />
        </MobileNav>
      </CommonNavStyles>
    </Modal>
  );
}
