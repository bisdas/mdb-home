import { AppSurface } from './App.styled';
import { CommonUIComponents } from './components/shared/CommonUIComponents/CommonUIComponents';
import { useInitialization } from './hooks/useInitialization';
import './styles/globalStyles.scss';

interface AppProps {
    children: React.ReactElement;
}

/**
 * App component.
 * @param props - The props for the App component.
 * @returns The rendered App component.
 */
export const App = (props: AppProps) => {
    const { isLoading, loadingErrors } = useInitialization();
    const { children } = props;

    // todo: add loader component
    if (isLoading) {
        return <AppSurface>Loading...</AppSurface>;
    }

    /**
     * temporary implementation of showing errors,
     * should be replaced with a proper mechanism later
     */
    if (loadingErrors.length > 0) {
        return (
            <AppSurface>
                <h4>Initialization Error</h4>
                <ul>
                    {loadingErrors.map((error, index) => (
                        <li key={index}>{error.message}</li>
                    ))}
                </ul>
            </AppSurface>
        );
    }

    return (
        <>
            <CommonUIComponents />
            <AppSurface>{children}</AppSurface>
        </>
    );
};

export default App;
