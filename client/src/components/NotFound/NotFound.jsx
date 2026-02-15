import { Link } from 'react-router';
import styles from '../NotFound/NotFound.module.css';

export default function NotFound() {
  return (
    <>
         <div className={styles.wrapper}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Страницата не беше намерена</h2>
        <p className={styles.subtitle}>
          Изглежда тази обява не съществува или е премахната.
        </p>

        <Link to="/" className={styles.button}>
          Обратно към началото
        </Link>
      </div>
        </div>
    </>
  );
};
