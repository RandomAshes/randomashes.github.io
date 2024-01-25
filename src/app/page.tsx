import Image from 'next/image';

import styles from './page.module.scss';

function HomePage() {
	return (
		<div>
			<Image
				src="/images/pexels-rizky-subagja-9053882_medium.jpg"
				sizes="(min-width: 768px) 100vw, 50vh"
				fill
				alt="Picture of the author"
				className={styles.backgroundImage}
			/>
			<div className={styles.content}>
				<h1>Ashley Clifton</h1>
				<p>Software Engineer</p>
			</div>
		</div>
	);
}

export default HomePage;
