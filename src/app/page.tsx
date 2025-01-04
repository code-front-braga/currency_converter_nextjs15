'use client';

import clsx from 'clsx';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import * as motion from 'motion/react-client';
import useTheme from '@/components/use-theme';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdCurrencyExchange } from 'react-icons/md';
import { GiBrazilFlag } from 'react-icons/gi';

import style from './home.module.css';

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
			<main className="relative flex h-svh w-full flex-col items-center justify-center gap-8 p-[1.8rem]">
				<header className="fixed top-[8rem] w-full">
					<div className="flex items-center justify-center">
						<CgArrowsExchangeAltV
							size={36}
							className={clsx({ 'text-rebeccaPurple': !darkMode, 'text-orangeRed': darkMode })}
						/>
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
					className={clsx(
						'relative flex h-[3rem] w-[5rem] cursor-pointer items-center self-start rounded-full p-[.5rem] transition-colors duration-700',
						{
							'bg-rebeccaPurple justify-start bg-opacity-60': !darkMode,
							'justify-end bg-orangeRed bg-opacity-50': darkMode,
						},
					)}
					onClick={() => setDarkMode(!darkMode)}
				>
					<motion.div
						className={clsx('h-[2.2rem] w-[2.2rem] rounded-full transition-colors duration-700', {
							'bg-snow': !darkMode,
							'bg-matteBlack': darkMode,
						})}
						layout
						transition={{ type: 'spring', visualDuration: 0.5, bounce: 0.4 }}
					/>
				</button>

				<form
					className={clsx(
						'flex w-full flex-col items-center gap-[3rem] rounded-lg p-4 transition-colors duration-700',
						{
							'bg-ghostWhite': !darkMode,
							'bg-nero': darkMode,
						},
					)}
				>
					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							{
								'border-rebeccaPurple bg-lavender': !darkMode,
								'border-orangeRed bg-matteBlack': darkMode,
							},
						)}
					>
						<label
							htmlFor="fromCurrency"
							className={clsx(
								'absolute left-[12px] top-1/2 -translate-y-1/2 font-inter text-[1.4rem] transition-colors duration-700',
								{
									'text-nero': !darkMode,
									'text-snow': darkMode,
								},
							)}
						>
							$
						</label>
						<input
							type="text"
							id="fromCurrency"
							className={clsx(
								'w-[70%] bg-transparent p-[.6rem] indent-[2rem] font-inter text-[1.4rem] outline-none transition-colors duration-700',
								{
									'text-nero': !darkMode,
									'text-snow': darkMode,
								},
							)}
						/>

						<div className="relative w-[30%]">
							<input
								type="submit"
								value="BRL"
								className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
									'text-nero': !darkMode,
									'text-snow': darkMode,
								})}
							/>
							<GiBrazilFlag
								size={18}
								className={clsx('absolute left-[1rem] top-1/2 -translate-y-1/2', {
									'text-lime': !darkMode || darkMode,
								})}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
									'text-rebeccaPurple': !darkMode,
									'text-orangeRed': darkMode,
								})}
							/>

							<ul
								className={clsx(
									'absolute left-0 top-[3rem] z-10 flex h-[20rem] w-full flex-col overflow-auto rounded-lg font-inter text-[1.3rem] text-snow shadow-lg',
									{
										'bg-mediumPurple': !darkMode,
										'bg-[#903310]': darkMode,
									},
									style['scrollbar-width'],
								)}
							>
								{['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'].map((currency, index) => (
									<li key={index} className="w-full cursor-pointer p-[.8rem] text-center">
										{currency}
									</li>
								))}
							</ul>
						</div>
					</div>
					<button>
						<MdCurrencyExchange
							size={24}
							className={clsx('transition-colors duration-700', {
								'text-mediumPurple': !darkMode,
								'text-orangeRed': darkMode,
							})}
						/>
					</button>
					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							{
								'border-rebeccaPurple bg-lavender': !darkMode,
								'border-orangeRed bg-matteBlack': darkMode,
							},
						)}
					>
						<label
							htmlFor="toCurrency"
							className={clsx(
								'absolute left-[12px] top-1/2 -translate-y-1/2 font-inter text-[1.4rem] transition-colors duration-700',
								{
									'text-nero': !darkMode,
									'text-snow': darkMode,
								},
							)}
						>
							$
						</label>
						<input
							type="text"
							id="toCurrency"
							readOnly
							placeholder="0.00"
							className={clsx(
								'pointer-events-none w-[70%] bg-transparent p-[.6rem] indent-[2rem] font-inter text-[1.4rem] outline-none transition-colors duration-700',
								{
									'text-nero': !darkMode,
									'text-snow': darkMode,
								},
							)}
						/>

						<div className="relative w-[30%]">
							<input
								type="submit"
								value="BRL"
								className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
									'text-snow': darkMode,
								})}
							/>
							<GiBrazilFlag
								size={18}
								className={clsx('absolute left-[1rem] top-1/2 -translate-y-1/2', {
									'text-lime': !darkMode || darkMode,
								})}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
									'text-rebeccaPurple': !darkMode,
									'text-orangeRed': darkMode,
								})}
							/>
							<ul
								className={clsx(
									'absolute left-0 top-[3rem] z-10 flex h-[20rem] w-full flex-col overflow-auto rounded-lg font-inter text-[1.3rem] text-snow shadow-lg',
									{
										'bg-mediumPurple': !darkMode,
										'bg-[#903310]': darkMode,
									},
									style['scrollbar-width'],
								)}
							>
								{['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'].map((currency, index) => (
									<li key={index} className="w-full cursor-pointer p-[.8rem] text-center">
										{currency}
									</li>
								))}
							</ul>
						</div>
					</div>
				</form>
			</main>
			<footer
				className={clsx('fixed bottom-0 w-full rounded-t-[3rem] p-[1.2rem] transition-colors duration-700', {
					'bg-matteBlack': !darkMode,
					'bg-snow': darkMode,
				})}
			>
				<p
					className={clsx('text-center font-inter text-[1.2rem]', {
						'text-snow': !darkMode,
						'text-nero': darkMode,
					})}
				>
					&copy; {new Date().getFullYear()} Currency Converter | Created by Leonardo Braga.
				</p>
			</footer>
		</>
	);
}
