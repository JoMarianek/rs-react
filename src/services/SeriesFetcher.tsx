import { SeriesResponse } from "@/types/Interfaces";

export default async function fetchSeries(currentPage: number): Promise<SeriesResponse | Error> {
    try {
        const response = await fetch(`https://stapi.co/api/v1/rest/series/search?pageNumber=${currentPage}&pageSize=6`)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        const knownError = error as Error;
        console.error("Error fetching data", error)
        return knownError;
    }
}
