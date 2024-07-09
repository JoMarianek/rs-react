import React from 'react'
import './index.css'
import { AppState } from './types/seriesInterface';

export default class App extends React.Component<object, AppState> {
    constructor(props: object) {
        super(props)
        this.state = {
            series: [],
            isLoading: true
        };
    }

    componentDidMount(): void {
        fetch("https://stapi.co/api/v1/rest/series/search?pageNumber=0")
        .then((response) => response.json())
        .then((data) => {
            this.setState({ series: data?.series, isLoading:false })
        })
        .catch(error => console.error("Error fetching data", error))
    }

    render() {
        if (this.state.isLoading) {
            <div></div>
        }
        return (
            <div className="wrapper">
                <div className="searchbar">
                    <input type="text" defaultValue="Search"/>
                    <button>Search</button>
                </div>
                {this.state.isLoading && (
                    <div className="loader-component"><span className="loader"></span></div>
                )}
                {!this.state.isLoading && (
                    <div className="results-list">
                        {this.state.series.map(serie => (
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
                )}
            </div>
        )
    }
}