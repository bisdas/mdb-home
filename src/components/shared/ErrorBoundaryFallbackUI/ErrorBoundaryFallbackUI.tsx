/**
 * A fallback UI component to be displayed when an error boundary catches an error.
 * @returns A message indicating that something went wrong.
 */
export const ErrorBoundaryFallbackUI = (): JSX.Element => {
    return (
        <div>
            <h4>Something went wrong!</h4>
        </div>
    );
};
