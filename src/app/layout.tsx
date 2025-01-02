import clsx from 'clsx';
import './globals.css';

import { Inter, Alumni_Sans_Pinstripe } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';

export const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
export const alumniSansPinstripe = Alumni_Sans_Pinstripe({
	subsets: ['latin'],
	weight: ['400'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={clsx('antialiased', inter.className, alumniSansPinstripe.className)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
