import { Link, useNavigate } from 'react-router';
import styles from './Register.module.css'
import { useForm } from 'react-hook-form';
import { useRegister } from '../../api/authApi';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Register() {
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register: formRegister,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        registerHandler(data);
    }

    const registerHandler = async (formData) => {
        const values = formData;

        try {
            const authData = await register(values.email, values.password);

            userLoginHandler(authData);

            navigate('/');

        } catch (error) {
            throw new Error(error.message)
        }
    }   
    return (
        <div className={styles["register-wrapp"]}>
        <div className={styles["form-box"]}>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder="Имейл"
                required="" 
                {...formRegister('email', {
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
                {...formRegister('password', {
                    required: 'Password is required!',
                    minLength: {
                        value: 5,
                        message: 'Password must be minimum 5 chars'
                    }
                })}
            />
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            <input
                type="password"
                placeholder="Потвърди паролата"
                required="" 
                {...formRegister('rePassword', {
                    required: 'Please repeat password!',
                    validate: (value) => value === watch('password') || 'Password do not match',
                })}    
            />
            {errors.rePassword && <p className={styles.error}>{errors.rePassword.message}</p>}
            <button type="submit" className={styles['register-btn']}>Регистрация</button>
        </form>
        <div className={styles["switch-link"]}>
            Вече имате акаунт? <Link to={'/login'}>Влезте</Link>
        </div>
        </div>
        </div>

    );
}
