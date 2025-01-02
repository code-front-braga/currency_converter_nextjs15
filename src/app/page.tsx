import { CgArrowsExchangeAltV } from 'react-icons/cg';

export default function HomePage() {
	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: 'url(/glitch-effect.png)',
					backgroundSize: '120px',
				}}
			/>
			<div className="absolute inset-0 bg-matteBlack bg-opacity-85" />

			<header className="w-full fixed top-[8rem]">
				<div className="flex items-center justify-center">
					<CgArrowsExchangeAltV size={36} className="text-orangeRed" />
					<h1 className="font-alumniSansPinstripe font-semibold bg-gradient-to-r dark:from-orangeRed dark:via-gold dark:to-orangeRed text-transparent dark:bg-clip-text dark:text-[3rem]">
						Currency Converter
					</h1>
				</div>
			</header>
		</>
	);
}
