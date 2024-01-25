import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import Nav from './_components/nav/nav';

import Footer from './_components/footer/footer';
import styles from './layout.module.css';
import './globals.scss';

const merriweatherFont = Merriweather({ weight: '300', subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Ashley Clifton's Porfolio",
	description: "Ashley Clifton's software engineering portfolio website.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={merriweatherFont.className}>
				<Nav />
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
