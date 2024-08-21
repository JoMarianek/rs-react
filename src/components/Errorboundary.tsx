import React, { ReactNode, ErrorInfo } from "react";
import '../index.css'

export interface ErrorBoundaryState {
    hasError: boolean;
}

export interface ErrorBoundaryProps {
    children?: ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }


    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        console.error("Error caught by ErrorBoundary:", error);
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error details:", error, errorInfo);
    }

    render() {
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