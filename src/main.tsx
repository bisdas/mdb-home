import React from 'react';
import { App as AppComponent } from './App.tsx';
import { ErrorBoundary } from './components/shared/ErrorBoundary/ErrorBoundary.tsx';
import { ErrorBoundaryFallbackUI } from './components/shared/ErrorBoundaryFallbackUI/ErrorBoundaryFallbackUI.tsx';

interface RootProviderProps {
    children: React.ReactNode;
}

/**
 * RootProvider component provides the root context for the application.
 * @param props - The props for the RootProvider component.
 * @param props.children - The child components to be rendered within the RootProvider.
 * @returns The rendered RootProvider component.
 */
const RootProvider = ({ children }: RootProviderProps): React.ReactElement => (
    <React.StrictMode>
        <ErrorBoundary fallbackUI={<ErrorBoundaryFallbackUI />}>{children}</ErrorBoundary>
    </React.StrictMode>
);

/**
 * App component.
 * @returns The rendered component.
 */
export const App = (): React.ReactElement => (
    <RootProvider>
        <AppComponent />
    </RootProvider>
);
