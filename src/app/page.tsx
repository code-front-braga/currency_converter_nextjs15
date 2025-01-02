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
			<div className="absolute inset-0 bg-matteBlack bg-opacity-80" />
		</>
	);
}
