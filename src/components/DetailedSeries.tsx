import styles from "./DetailedSeries.module.css"
import { Series } from "@/types/Interfaces"


interface DetailedSeriesProps {
    details: Series;
    toggleModal: () => void;
}

export default function DetailedSeries({toggleModal, details}: DetailedSeriesProps): JSX.Element {
    return(
            <div className={`${styles.detailedModal}`}>
                <div key={details.uid} className={`list-item ${styles.modalContent}`}>
                    <button onClick={ toggleModal }>x</button>
                    <h3>{details.title} ({details.abbreviation})</h3>
                    <p>Production Years: {details.productionStartYear} - {details.productionEndYear || 'Ongoing'}</p>
                    <p>Original Run: {details.originalRunStartDate} to {details.originalRunEndDate || 'Ongoing'}</p>
                    <p>Seasons: {details.seasonsCount}</p>
                    <p>Episodes: {details.episodesCount}</p>
                    <p>Production Company: {details.productionCompany?.name}</p>
                    <p>Original Broadcaster: {details.originalBroadcaster?.name}</p>
                </div>
            </div>
    );
}
