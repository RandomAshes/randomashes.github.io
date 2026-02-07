import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>About</h2>
          <div className={styles.text}>
            <p>
              I'm a designer and developer based in [Your Location], focused on creating 
              meaningful digital experiences that are both beautiful and functional.
            </p>
            <p>
              With a background in both design and development, I bring a unique perspective 
              to every project. I believe in the power of simplicity, clean code, and thoughtful 
              user experiences.
            </p>
            <p>
              When I'm not working, you can find me exploring new design trends, contributing 
              to open source, or enjoying nature with a good cup of coffee.
            </p>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillColumn}>
              <h3>Design</h3>
              <ul>
                <li>UI/UX Design</li>
                <li>Branding</li>
                <li>Prototyping</li>
              </ul>
            </div>
            <div className={styles.skillColumn}>
              <h3>Development</h3>
              <ul>
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className={styles.skillColumn}>
              <h3>Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Git</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
