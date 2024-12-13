/* eslint-disable @typescript-eslint/no-explicit-any */
class RickAndMortyApiService {
	async getCharacters(page = 1): Promise<any[]> {
		return this.get("character", page);
	}

	async getLocations(page = 1): Promise<any[]> {
		return this.get("location", page);
	}

	async getEpisodes(page = 1): Promise<any[]> {
		return this.get("episode", page);
	}

	private async get(endpoint: "character" | "location" | "episode", page: number): Promise<any[]> {
		const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}?page=${page}`);
		const data = await response.json();

		return data.results;
	}
}

const rickAndMortyApiService = new RickAndMortyApiService();

export default rickAndMortyApiService;
