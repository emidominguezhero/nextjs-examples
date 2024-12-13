"use server";

import rickAndMortyService from "@/services/rick-and-morty";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getLocationsAction(currentPage: number): Promise<any[]> {
	return rickAndMortyService.getLocations(currentPage);
}
