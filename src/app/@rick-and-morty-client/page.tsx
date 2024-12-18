"use client";

import { useEffect, useState } from "react";
import { clamp } from "@/utilities/helpers";
import rickAndMortyService from "@/services/rick-and-morty";

export default function RickAndMortyPageClient() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [episodes, setEpisodes] = useState<any[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		rickAndMortyService.getEpisodes(currentPage).then(setEpisodes);
	}, [currentPage]);

	return (
		<div>
			<h1 style={{ marginBottom: "2rem" }}>Episodes</h1>

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
				{episodes?.length ? (
					episodes.map((episode) => (
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
