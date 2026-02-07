import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Ashley Clifton</h1>
          <p className={styles.subtitle}>Senior Full-Stack Software Engineer</p>
          <p className={styles.description}>
            Creating thoughtful digital experiences with clean code and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}
