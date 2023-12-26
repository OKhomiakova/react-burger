import { Link } from 'react-router-dom';
import styles from './not-found-404.module.css';   
 
const NotFound404 = () => {
    return (
        <section className={styles.page}>
            <h1 className="text text_type_digits-large mt-10 mb-10">404</h1>
            <h2 className="text text_type_main-medium mb-4">Такой страницы у нас нет 👾 </h2>
            <Link className="text text_type_main-small" to={"/"}>Вернуться на главную</Link>
        </section>
    );
}

export default NotFound404;
