import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({children, onClick}) => (
    <div className={styles.overlay} onClick={onClick}>
        {children}
    </div>
)

export default ModalOverlay;

ModalOverlay.propTypes = {
    children: PropTypes.element,
    onClick: PropTypes.func.isRequired,
}; 