import React, { ReactNode, MouseEvent } from 'react';
import styles from './modal-overlay.module.css';

type TModalOverlayProps = {
  children?: ReactNode;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const ModalOverlay: React.FC<TModalOverlayProps> = ({ children, onClick }) => (
  <div className={styles.overlay} onClick={onClick}>
    {children}
  </div>
);

export default ModalOverlay;