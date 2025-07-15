import { Link, useNavigate } from 'react-router';
import styles from './Login.module.css'
import { useForm } from 'react-hook-form';
import { useLogin } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Login() {
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        loginHandler(data);
    }

    const loginHandler = async (data) => {
        const values = data;

        try {
            const authData = await login(values.email, values.password);
    
            userLoginHandler(authData);

            navigate('/');
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return (
        <div className={styles["login-wrapp"]}>
        <div className={styles["form-box"]}>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Имейл"
                    required=""
                    {...register('email', {
                        required: 'Email is required!',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                        }
                    })}
                 />
                 {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                <input
                    type="password"
                    placeholder="Парола"
                    required="" 
                    {...register('password', {
                        required: 'Password is required!',
                        minLength: {
                            value: 5,
                            message: 'Password must be at least 5 characters!'
                        },
                    })}
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                <button type="submit" className={styles['login-btn']}>Влез</button>
            </form>
            <div className={styles["switch-link"]}>
            Нямате акаунт? <Link to={'/register'}>Регистрирайте се</Link>
            </div>
        </div>
        </div>

    );
}
