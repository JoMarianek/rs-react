import { ReactNode } from "react";

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

export interface AppState {
    series: Series[];
    isLoading: boolean;
    error?: Error;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
}