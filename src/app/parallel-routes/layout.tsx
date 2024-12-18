interface LayoutProps {
	children: React.ReactNode;
	"rick-and-morty-server": React.ReactNode;
	"rick-and-morty-client": React.ReactNode;
	"rick-and-morty-client-with-action": React.ReactNode;
}

export default function Layout(props: Readonly<LayoutProps>) {
	const slots = ["rick-and-morty-server", "rick-and-morty-client", "rick-and-morty-client-with-action"];

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(40vw, 1fr))",
				gap: "1rem",
				padding: "1rem"
			}}
		>
			<div style={{ gridColumn: "1 / -1" }}>{props.children}</div>

			{slots.map((slot, i) => (
				<div
					key={i}
					style={{
						maxHeight: "calc(50vh - 2rem)",
						overflow: "auto",
						border: "1px solid #444",
						padding: "1rem",
						borderRadius: "0.5rem"
					}}
				>
					{props[slot as keyof typeof props]}
				</div>
			))}
		</div>
	);
}
