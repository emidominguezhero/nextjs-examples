import { revalidatePath } from "next/cache";
import Image from "next/image";
import rickAndMortyService from "@/services/rick-and-morty";

let currentPage = 1;
let characters = await rickAndMortyService.getCharacters(currentPage);

export async function Server(props: { path: string }) {
	async function updateCharacters(formData: FormData): Promise<void> {
		"use server";

		const page = formData.get("page") as string;

		if (page) {
			currentPage = Number(page);
			characters = await rickAndMortyService.getCharacters(currentPage);
			revalidatePath(props.path, "page");
		}
	}

	return (
		<div>
			<h1 style={{ marginBottom: "2rem" }}>Characters</h1>

			<form action={updateCharacters}>
				<label>
					Page:
					<input type="number" name="page" min={1} defaultValue={currentPage} />
				</label>

				<button type="submit">Go</button>
			</form>

			<ul>
				{characters?.length ? (
					characters.map((character) => (
						<li
							key={character.id}
							style={{
								display: "flex",
								alignItems: "center",
								gap: "1rem",
								marginTop: "1rem"
							}}
						>
							<Image src={character.image} alt={character.name} width={50} height={50} />
							<p>{character.name}</p>
						</li>
					))
				) : (
					<li>No characters found</li>
				)}
			</ul>
		</div>
	);
}
