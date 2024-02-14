import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modal');

type TModalProps = {
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<TModalProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    (
      <>
        <ModalOverlay onClick={onClose} />
        <div className={styles.modal}>
          {title ? (
            <div className={`${styles.header} mt-10 ml-10 mr-10`}>
              <p className={`text text_type_main-large`}>{title}</p>
              <div className={styles.icon} aria-label="close">
                <CloseIcon type="primary" onClick={onClose}/>
              </div>
            </div>
          ) : (
            <div className={styles.closeIcon} aria-label="close">
              <CloseIcon type="primary" onClick={onClose}/>
            </div>
          )}
          {children}
        </div>
      </>
    ),
    modalRoot!
  );
};

export default Modal;