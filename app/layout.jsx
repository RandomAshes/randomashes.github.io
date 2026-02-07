import { Merriweather } from 'next/font/google';
import './globals.scss';

const merriweatherFont = Merriweather({ weight: '300', subsets: ['latin'] });

export const metadata = {
  title: `${process.env.NAME} - Portfolio`,
  description: 'Full-Stack Software Engineer creating thoughtful digital experiences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweatherFont.className}>
        {children}
      </body>
    </html>
  );
}
