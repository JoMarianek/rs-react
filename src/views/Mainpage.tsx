import React from 'react';
import { useState, useEffect } from 'react'
import '@/index.css'
import { Series } from '@/types/seriesInterface';
import Pagination from '@/components/Pagination';
import { useLocation } from 'react-router-dom';

export default function App() {
    const query = new URLSearchParams(useLocation().search)
    const [series, setSeries] = useState<Series[]>([]);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(parseInt(query.get('pageNumber') || '0', 10));
    const itemsPerPage = 6;

    function handleClick() {
        setError(true);
    }

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await fetch(`https://stapi.co/api/v1/rest/series/search?pageNumber=${currentPage}&pageSize=6`)
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSeries(data.series);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data", error)
                setError(true);
            }
        }
        fetchSeries();
    }, [currentPage, itemsPerPage]);

    if (isloading) {
        return <div className="loader-component"><span className="loader"></span></div>
    }

    if (error) {
        return <div style={{height: '100vh'}}>
                    <h1>Error: Something went wrong</h1>
                    <h2>Please refresh this page</h2>
                </div>
    }
    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber - 1);
    };

    return (
        <div className="wrapper">
            <div className="searchbar">
                <input type="text" defaultValue="Search"/>
                <button>Search</button>
                <p>Try out the Error Boundary &#8594;</p>
                <button onClick={handleClick}>Throw Error</button>
            </div>
                <div className="results-list">
                    {series.map(serie => (
                        <div key={serie.uid} className="list-item">
                            <h3>{serie.title} ({serie.abbreviation})</h3>
                            <p>Production Years: {serie.productionStartYear} - {serie.productionEndYear || 'Ongoing'}</p>
                            <p>Original Run: {serie.originalRunStartDate} to {serie.originalRunEndDate || 'Ongoing'}</p>
                            <p>Seasons: {serie.seasonsCount}</p>
                            <p>Episodes: {serie.episodesCount}</p>
                            <p>Production Company: {serie.productionCompany.name}</p>
                            <p>Original Broadcaster: {serie.originalBroadcaster.name}</p>
                        </div>
                    ))}
                </div>
            <Pagination
                totalElements={12}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePagination}
            />
        </div>
    );
}