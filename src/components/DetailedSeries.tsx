import styles from "./DetailedSeries.module.css"

import { useEffect, useState } from "react";

import { Series } from "@/types/Interfaces"
import { fetchSeriesDetais } from "@/services/SeriesFetcher";


interface DetailedSeriesProps {
    uid: string;
    toggleModal: () => void;
}

export default function DetailedSeries({toggleModal, uid}: DetailedSeriesProps): JSX.Element {
    const [details, setDetails] = useState<Series | undefined>(undefined);
    // const [isLoading, setIsLoading] = useState<boolean>(true)
    
    useEffect(()=> {
        const fetchData = async () => {
            const data = await fetchSeriesDetais(uid);
            if (data instanceof Error)
                console.log('Error fetching data');
            else
                setDetails(data.series);
                // setIsLoading(false);
        }
        fetchData();
    }, [details]);
    
    return(
            <div className={`${styles.detailedModal}`}>
                <div key={details?.uid} className={`list-item ${styles.modalContent}`}>
                    <button onClick={ toggleModal }>x</button>
                    <h3>{details?.title} ({details?.abbreviation})</h3>
                    <p>Production Years: {details?.productionStartYear} - {details?.productionEndYear || 'Ongoing'}</p>
                    <p>Original Run: {details?.originalRunStartDate} to {details?.originalRunEndDate || 'Ongoing'}</p>
                    <p>Seasons: {details?.seasonsCount}</p>
                    <p>Episodes: {details?.episodesCount}</p>
                    <p>Production Company: {details?.productionCompany?.name}</p>
                    <p>Original Broadcaster: {details?.originalBroadcaster?.name}</p>
                </div>
            </div>
    );
}

//fetch details 
// pass loader and error state as props, or create loading compnent
//create link in mainpage to this component
// add new router for detailedpage
//create router outlet
// implent path params for url