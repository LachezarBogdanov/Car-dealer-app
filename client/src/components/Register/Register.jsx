import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles["register-wrapp"]}>
        <div className={styles["form-box"]}>
        <h2>Регистрация</h2>
        <form>
            <input type="email" placeholder="Имейл" required="" />
            <input type="password" placeholder="Парола" required="" />
            <input type="password" placeholder="Потвърди паролата" required="" />
            <button type="submit" className={styles['register-btn']}>Регистрация</button>
        </form>
        <div className={styles["switch-link"]}>
            Вече имате акаунт? <a href="login.html">Влезте</a>
        </div>
        </div>
        </div>

    );
}
