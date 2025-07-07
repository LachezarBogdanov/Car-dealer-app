import styles from './Login.module.css'

export default function Login() {
    return (
        <div className={styles["login-wrapp"]}>
        <div className={styles["form-box"]}>
            <h2>Вход</h2>
            <form>
            <input type="email" placeholder="Имейл" required="" />
            <input type="password" placeholder="Парола" required="" />
            <button type="submit">Влез</button>
            </form>
            <div className={styles["switch-link"]}>
            Нямате акаунт? <a href="register.html">Регистрирайте се</a>
            </div>
        </div>
        </div>

    );
}
