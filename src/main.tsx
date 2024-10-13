import React from 'react';
import App from './App.tsx';
import { ErrorBoundary } from './components/shared/ErrorBoundary/ErrorBoundary.tsx';
import { ErrorBoundaryFallbackUI } from './components/shared/ErrorBoundaryFallbackUI/ErrorBoundaryFallbackUI.tsx';
import { MDBHome as MDBHomeComponent } from 'src/components/MDBHome/MDBHome.tsx';

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
 * Demo component.
 * @returns The rendered Demo component.
 */
export const MDBHome = (): React.ReactElement => (
    <RootProvider>
        <App>
            <MDBHomeComponent />
        </App>
    </RootProvider>
);
