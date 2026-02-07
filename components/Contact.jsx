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
              {process.env.EMAIL}
            </a>
            <div className={styles.social}>
              <a
                  href={`https://github.com/${process.env.GH_USERNAME}`}
                  className={styles.socialLink}
                  rel="noopener noreferrer"
                  target="_blank"
              >
                GitHub
              </a>
              <span className={styles.divider}>/</span>
              <a
                href={`https://linkedin.com/in/${process.env.LINKED_IN_USERNAME}`}
                className={styles.socialLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              {/*<span className={styles.divider}>/</span>*/}
              {/*<a href="https://twitter.com/yourusername" className={styles.socialLink}>Twitter</a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
