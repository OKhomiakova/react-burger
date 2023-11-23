import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("react-modal");

const Modal = ({title, onClose, children}) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
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
                    {title ? (<div className={`${styles.header} mt-10 ml-10 mr-10`}>
                        <p className={`text text_type_main-medium`}>{title}</p>
                        <CloseIcon type="primary" onClick={onClose} />
                    </div>) :
                    (<div className={styles.closeIcon}>
                        <CloseIcon type="primary"  onClick={onClose} />
                    </div>)
                    }
                    {children}
                </div>
            </>
        ), 
        modalRoot
    );
};

export default Modal;