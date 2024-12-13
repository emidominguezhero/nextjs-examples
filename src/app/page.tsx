const examples = ["Characters - Server-side rendering", "Episodes - Client-side rendering", "Locations - Client-side rendering using server actions"];

export default function Home() {
	return (
		<div>
			<h1>This is the main page</h1>

			<h2>Examples:</h2>

			<ul>
				{examples.map((example) => (
					<li key={example}>{example}</li>
				))}
			</ul>
		</div>
	);
}
