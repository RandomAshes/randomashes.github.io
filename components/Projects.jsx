import styles from './Projects.module.scss';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      category: 'Web Design',
      description: 'A minimal e-commerce platform focused on user experience and clean aesthetics.',
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'Development',
      description: 'Full-stack application built with modern technologies and best practices.',
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'Branding',
      description: 'Complete brand identity and digital presence for a sustainable business.',
      link: '#'
    }
  ];

  return (
    <section id="work" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <a key={project.id} href={project.link} className={styles.projectCard}>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
              <div className={styles.arrow}>→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
