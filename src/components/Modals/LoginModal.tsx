import { useContext } from "react";
import Modal from "react-modal";
import { LoginContext } from "../../routes/Home";
import { LoginContent } from "./LoginContent";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    zIndex: "1002",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "1001"
  },
};

export function LoginModal() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useContext(LoginContext);

  function closeLoginModal() {
    setLoginModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={loginModalIsOpen}
      onRequestClose={closeLoginModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <LoginContent />
    </Modal>
  );
}
