import { useContext } from "react";
import Modal from "react-modal";
import { RegisterContext } from "../../routes/Home";
import { RegisterContent } from "./RegisterContent";

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
    zIndex: "1001",
  },
};

export function RegisterModal() {
  const [registerModalIsOpen, setRegisterModalIsOpen] =
    useContext(RegisterContext);

  function closeRegisterModal() {
    setRegisterModalIsOpen(false);
  }

  return (
    <Modal
      isOpen={registerModalIsOpen}
      onRequestClose={closeRegisterModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <RegisterContent />
    </Modal>
  );
}
