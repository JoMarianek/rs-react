import React from 'react'
import './index.css'
import { AppState } from './types/seriesInterface';
import { ErrorBoundary } from './components/errorboundary';

export default class App extends React.Component<object, AppState> {
    constructor(props: object) {
        super(props)
        this.state = {
            series: [],
            isLoading: true,
            error: undefined
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(): void {
        fetch("https://stapi.co/api/v1/rest/series/search?pageNumber=0")
        .then((response) => response.json())
        .then((data) => {
            this.setState({ series: data?.series, isLoading:false })
        })
        .catch(error => console.error("Error fetching data", error))
    }
    handleClick() {
        try {
            throw new Error("An error occurred");
        } catch (error) {
            if (error instanceof Error) {
                this.setState({ error });
            } else {
                this.setState({ error: new Error("An unknown error occurred") });
            }
        }
    }

    render() {
        if (this.state.error) {
            return (
                <div className="fallback-ui">
                    <h1>Whoops! Something went wrong</h1>
                    <h3>Please refresh this page</h3>
                </div>
            );
        }
        return (
            <ErrorBoundary>
                <div className="wrapper">
                    <div className="searchbar">
                        <input type="text" defaultValue="Search"/>
                        <button>Search</button>
                        <p>Try out the Error Boundary &#8594;</p>
                        <button onClick={this.handleClick}>Throw Error</button>
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
            </ErrorBoundary>
        );
    }
}