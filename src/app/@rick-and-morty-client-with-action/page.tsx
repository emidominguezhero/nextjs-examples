"use client";

import { useEffect, useState } from "react";
import { getLocationsAction } from "./actions";
export default function RickAndMortyPageClientWithAction() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [locations, setLocations] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getLocationsAction(currentPage).then(setLocations);
	}, [currentPage]);

	return (
		<div>
			<h1>Rick and Morty locations</h1>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1rem"
				}}
			>
				<button onClick={() => setCurrentPage((prev) => clamp(prev - 1, 0, Number.MAX_SAFE_INTEGER))}>Previous page</button>
				<button onClick={() => setCurrentPage((prev) => clamp(prev + 1, 0, Number.MAX_SAFE_INTEGER))}>Next page</button>
			</div>

			<ul>
				{locations?.length ? (
					locations.map((episode) => (
						<li key={episode.name} style={{ padding: "1rem" }}>
							<p>{episode.name}</p>
						</li>
					))
				) : (
					<li>No episodes found</li>
				)}
			</ul>
		</div>
	);
}

function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}
