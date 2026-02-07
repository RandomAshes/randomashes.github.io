import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>{process.env.NAME}</div>
          <ul className={styles.navLinks}>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
