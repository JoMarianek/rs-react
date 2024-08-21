import React from 'react';

import '@/index.css'
import fetchSeries from '@/services/SeriesFetcher';
import { Series } from '@/types/Interfaces';
import Pagination from '@/components/Pagination';
import DetailedSeries from '@/components/DetailedSeries';


import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function App() {
    const query = new URLSearchParams(useLocation().search)
    const [series, setSeries] = useState<Series[]>([]);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState<boolean | undefined>(undefined);
    const [details, setDetails] = useState<Series | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(parseInt(query.get('pageNumber') || '0', 10));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const itemsPerPage = 6;

    function handleClick() {
        setError(true);
    }

    function showDetails(serie: Series) {
        setDetails(serie);
    }

    function toggleModal() {
        setIsModalVisible(!isModalVisible)
    }

    useEffect(() => {
        const getData = async () => {
            const data = await fetchSeries(currentPage);
            if (data instanceof Error) {
                setError(true);
            } else {
                setSeries(data.series);
                setLoading(false);
            }
        };
        getData();
    }, [currentPage, isModalVisible]);

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
            <div className="header">
                <input type="text" defaultValue="Search"/>
                <button>Search</button>
                <p>Try out the Error Boundary &#8594;</p>
                <button onClick={handleClick}>Throw Error</button>
            </div>
            <div className="results-list">
                {series.map(serie => (
                    <div key={serie.uid} className="list-item clickable" onClick={() => {showDetails(serie); toggleModal();}}>
                        <h3>{serie.title} ({serie.abbreviation})</h3>
                        <p>Original Run: {serie.originalRunStartDate?.slice(0, 4)} to {serie.originalRunEndDate?.slice(0, 4) || 'Ongoing'}</p>
                    </div>
                ))}
            </div>
            {details && isModalVisible && <DetailedSeries 
                toggleModal={toggleModal}
                details={details}
            />}
            <Pagination
                totalElements={12}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePagination}
            />
        </div>
    );
}
