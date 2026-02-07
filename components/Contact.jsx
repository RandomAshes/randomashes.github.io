import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.description}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className={styles.links}>
            <a href="mailto:your.email@example.com" className={styles.link}>
              your.email@example.com
            </a>
            <div className={styles.social}>
              <a href="https://github.com/yourusername" className={styles.socialLink}>GitHub</a>
              <span className={styles.divider}>/</span>
              <a href="https://linkedin.com/in/yourusername" className={styles.socialLink}>LinkedIn</a>
              <span className={styles.divider}>/</span>
              <a href="https://twitter.com/yourusername" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
