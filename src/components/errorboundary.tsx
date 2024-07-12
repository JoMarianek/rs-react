import React, { ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../types/seriesInterface";
import '../index.css'

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }


    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error("Error caught by ErrorBoundary:", error);
        return { hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error details:", error, errorInfo);
    }

    render() {
        console.log(this.state.hasError)
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Whoops! Something went wrong</h1>
                    <h3>Please refresh this page</h3>
                </div>
            );
        }
        return this.props.children;
    }
}