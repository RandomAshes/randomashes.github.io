import Image from 'next/image';

import styles from './page.module.scss';

function HomePage() {
	return (
		<div className={styles.homePage}>
			<Image
				src="/images/pexels-cup-of-couple-6177607.jpg"
				sizes="(min-width: 768px) 100vw, 50vh"
				fill
				alt="Picture of the author"
				className={styles.backgroundImage}
			/>
			<div className={styles.content}>
				<div className={styles.card}>
					<h1>Ashley Clifton</h1>
					<p>Software Engineer</p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
