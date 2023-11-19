import React, { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import "./modal.scss";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === "Escape" ? handleClose() : null;
      document.body.addEventListener("keydown", closeOnEscapeKey);

      return (): void => {
        document.body.removeEventListener("keydown", closeOnEscapeKey);
      };
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="modal-layer fixed top-0 lef-0 inset-0 w-screen z-40 "></div>
        <div className="fixed z-50 flex w-screen justify-center items-center overflow-hidden inset-0">
          <div className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white rounded shadow-sm p-5">
            <button
              onClick={handleClose}
              className="font-bold text-lg text-rose-500"
            >
              x
            </button>
            <div className="box-border h-5/6">{children}</div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
