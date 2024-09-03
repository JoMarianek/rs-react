export interface SeriesResponse {
    series: Series[];
}

export interface DetailedSeriesResponse {
    series: Series;
}

export interface Series {
    uid: string;
    title: string;
    abbreviation: string;
    productionStartYear: number;
    productionEndYear: number | null;
    originalRunStartDate:string | null;
    originalRunEndDate: string | null;
    seasonsCount: number | null;
    episodesCount: number | null;
    productionCompany: {
        name: string
    };
    originalBroadcaster: {
        name: string
    }
}