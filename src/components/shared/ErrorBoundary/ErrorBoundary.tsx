import React, { ErrorInfo, ReactNode } from 'react';
import { logToConsole } from 'src/utils/loggingUtils';
interface ErrorBoundaryProps {
    children: ReactNode;
    fallbackUI: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

/**
 * ErrorBoundary component catches errors anywhere in their child component tree,
 * log those errors, and display a fallback UI.
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    /**
     * Initializes a new instance of the ErrorBoundary class.
     * @param props - The properties of the component.
     */
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    /**
     * This lifecycle is invoked after an error has been thrown by a descendant component.
     * It receives the error that was thrown as a parameter and should return a value to update state.
     * @param error - The error that was thrown.
     * @returns The new state.
     */
    static getDerivedStateFromError(error: Error) {
        logToConsole(`Error Boundary getDerivedStateFromError()', ${error}`);
        return { hasError: true };
    }

    /**
     * This lifecycle is invoked after an error has been thrown by a descendant component.
     * It receives two parameters:
     * error - The error that was thrown.
     * info - An object with a componentStack key containing information about which component threw the error.
     * @param error - The error that was thrown.
     * @param info - An object with information about the error.
     */
    componentDidCatch(error: Error, info: ErrorInfo) {
        logToConsole(`Error Boundary componentDidCatch()', ${this.state.hasError}, ${error}, ${info}`);
        // todo: log the error
    }

    /**
     * Renders the component.
     * @returns The node to render.
     */
    render() {
        if (this.state.hasError) {
            return this.props.fallbackUI;
        }

        return this.props.children;
    }
}

// todo: plug in the error boundary with global state management
