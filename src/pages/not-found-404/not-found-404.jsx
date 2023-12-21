import styles from './not-found-404.module.css';   
 
const NotFound404 = () => {
    return (
        <section className={styles.page}>
            <h1 className="text text_type_digits-large mt-10 mb-10">404</h1>
            <h2 className="text text_type_main-medium mb-4">Такой страницы у нас нет 👾 </h2>
            <a className="text text_type_main-small" href="/">Вернуться на главную</a>
        </section>
    );
}

export default NotFound404;
