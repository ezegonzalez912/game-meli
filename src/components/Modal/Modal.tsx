import { useContext } from "react";
import { modalContext } from "../../context/modal/modalContext";
import { ModalLogin } from "./ModalLogin";
import { ModalRegister } from "./ModalRegister";

export const Modal: React.FC = () => {
  const { isOpenModal, handleOpenModal, modal, setModal } =
    useContext(modalContext);

  const handleCloseModal = () => {
    setModal("login");
    handleOpenModal();
  };

  return (
    <div
      className={`modal ${isOpenModal && "modalOpen"}`}
      onClick={handleCloseModal}
    >
      {modal === "login" && <ModalLogin />}
      {modal === "register" && <ModalRegister />}
    </div>
  );
};
