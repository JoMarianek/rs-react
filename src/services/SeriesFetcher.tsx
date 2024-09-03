import { DetailedSeriesResponse, SeriesResponse } from "@/types/Interfaces";


export async function fetchSeries(currentPage: number): Promise<SeriesResponse | Error> {
    const seriesUrl = `https://stapi.co/api/v1/rest/series/search?pageNumber=${currentPage}&pageSize=6`;
    return callAPI(seriesUrl)
}

export async function fetchSeriesDetais(uid: string): Promise<DetailedSeriesResponse | Error> {
    const detailedUrl = `https://stapi.co/api/v1/rest/series?uid=${uid}`;
    return callAPI(detailedUrl)
}

export async function callAPI<T>(url: string): Promise<T | Error> {
    try {
        const response = await fetch(url)
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