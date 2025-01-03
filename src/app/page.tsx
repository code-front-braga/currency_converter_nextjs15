'use client';

import clsx from 'clsx';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import * as motion from 'motion/react-client';
import useTheme from '@/components/use-theme';

export default function HomePage() {
	const { darkMode, setDarkMode } = useTheme();

	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: 'url(/glitch-effect.png)',
					backgroundSize: '120px',
				}}
			/>
			<div
				className={clsx('absolute inset-0 bg-opacity-85 transition-colors duration-700', {
					'bg-snow': !darkMode,
					'bg-matteBlack': darkMode,
				})}
			/>
			<main className="relative flex h-svh w-full flex-col items-center justify-center p-[1.6rem]">
				<header className="fixed top-[8rem] w-full">
					<div className="flex items-center justify-center">
						<CgArrowsExchangeAltV size={36} className="text-orangeRed" />
						<h1
							className={clsx('font-alumniSansPinstripe text-[3rem] font-semibold', {
								'text-matteBlack': !darkMode,
								'bg-gradient-to-r text-transparent dark:from-orangeRed dark:via-gold dark:to-orangeRed dark:bg-clip-text':
									darkMode,
							})}
						>
							Currency Converter
						</h1>
					</div>
				</header>

				<button
					className={clsx('relative flex h-[3.5rem] w-[6rem] cursor-pointer rounded-full bg-blue-700 p-[.5rem]', {
						'justify-start bg-matteBlack': !darkMode,
						'justify-end bg-black': darkMode,
					})}
					onClick={() => setDarkMode(!darkMode)}
				>
					<motion.div
						className={clsx('h-[2.5rem] w-[2.5rem] rounded-full bg-red-600', {
							'bg-snow': !darkMode,
							'bg-gradient-to-tr from-orangeRed from-20% via-gold to-matteBlack': darkMode,
						})}
						layout
						transition={{ type: 'spring', visualDuration: 0.5, bounce: 0.4 }}
					/>
				</button>
			</main>
		</>
	);
}
