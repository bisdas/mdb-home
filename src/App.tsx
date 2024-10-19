import { AppSurface } from './App.styled';
import { CommonUIComponents } from './components/shared/CommonUIComponents/CommonUIComponents';
import { useInitialization } from './hooks/useInitialization';
import './styles/globalStyles.scss';
import { Home } from './components/Home/Home';
import { themeSelector, useExperienceStore } from './stores/experienceStore';
import { ThemeProvider } from 'styled-components/macro';
import { Theme } from './constants/experienceConstants';
import { useEffect } from 'react';
import { LocalStorageKeyTheme } from './constants/commonConstants';

/**
 * App component.
 * @returns The rendered App component.
 */
export const App = () => {
    const { isLoading, loadingErrors } = useInitialization();
    const theme = useExperienceStore(themeSelector);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(LocalStorageKeyTheme, theme);
            // todo: find a better way to set the background color
            document.body.style.backgroundColor =
                theme === Theme.LightTheme
                    ? 'var(--default-light-theme-background-color)'
                    : 'var(--default-dark-theme-background-color)';
            document.body.style.color =
                theme === Theme.LightTheme
                    ? 'var(--default-light-theme-font-color)'
                    : 'var(--default-dark-theme-font-color)';
        }
    }, [theme, isLoading]);

    if (isLoading) {
        return (
            <ThemeProvider theme={{ theme }}>
                <AppSurface>Loading...</AppSurface>
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
