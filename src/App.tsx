import { AppSurface } from './App.styled';
import { CommonUIComponents } from './components/shared/CommonUIComponents/CommonUIComponents';
import { useInitialization } from './hooks/useInitialization';
import './styles/globalStyles.scss';
import { Home } from './pages/Home/Home';
import { themeSelector, useExperienceStore } from './stores/experienceStore';
import { ThemeProvider } from 'styled-components/macro';
import { useThemeRefresh } from './hooks/useThemeRefresh';

/**
 * App component.
 * @returns The rendered App component.
 */
export const App = () => {
    const { isLoading, loadingErrors } = useInitialization();
    const theme = useExperienceStore(themeSelector);
    useThemeRefresh(isLoading, theme);

    if (isLoading) {
        return (
            <ThemeProvider theme={{ theme }}>
                <AppSurface></AppSurface>
            </ThemeProvider>
        );
    }

    if (loadingErrors.length > 0) {
        // todo: same error should not be printed twice
        return (
            <ThemeProvider theme={{ theme }}>
                <AppSurface>
                    <ul>
                        {loadingErrors.map((error, index) => (
                            <li key={index}>{error.message}</li>
                        ))}
                    </ul>
                </AppSurface>
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider theme={{ theme }}>
            <AppSurface>
                <CommonUIComponents />
                <Home />
            </AppSurface>
        </ThemeProvider>
    );
};

export default App;
