import Link from 'next/link';

import styles from './footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.list}>
				<li>
					<Link
						href="https://twitter.com/randomashes/"
						className={`${styles.socialLink} ${styles.twitter}`}
						target="_blank"
					>
						Twitter
					</Link>
				</li>
				<li>
					<Link
						href="http://linkedin.com/in/ashleyrclifton/"
						className={`${styles.socialLink} ${styles.linkedin}`}
						target="_blank"
					>
						LinkedIn
					</Link>
				</li>
				<li>
					<Link
						href="https://github.com/randomashes/"
						className={`${styles.socialLink} ${styles.github}`}
						target="_blank"
					>
						Github
					</Link>
				</li>
			</ul>
			<p className={styles.copyright}>Copyright 2024, Ashley Clifton</p>
		</footer>
	);
}

export default Footer;
