import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>&copy; 2026 Your Name</p>
          <p>Designed & built with care</p>
        </div>
      </div>
    </footer>
  );
}
