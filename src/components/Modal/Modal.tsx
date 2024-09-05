import { ReactNode, forwardRef } from "react";
import * as styles from "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  defaultCloseButton?: boolean;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children, defaultCloseButton = false }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent} ref={ref}>
          {defaultCloseButton && (
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
export default Modal;
