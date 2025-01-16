import { useEffect } from 'react';
import { LocalStorageKeyTheme } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';

/**
 * Hook to refresh the theme.
 * @param isLoading - The loading state.
 * @param theme - The theme.
 */
export const useThemeRefresh = (isLoading: boolean, theme: Theme) => {
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem(LocalStorageKeyTheme, theme);
            // todo: find a better way to set the background color
            document.documentElement.style.backgroundColor =
                theme === Theme.LightTheme
                    ? 'var(--theme-light-background-color-default)'
                    : 'var(--theme-dark-background-color-default)';
            document.body.style.backgroundColor =
                theme === Theme.LightTheme
                    ? 'var(--theme-light-background-color-default)'
                    : 'var(--theme-dark-background-color-default)';
            document.documentElement.style.color =
                theme === Theme.LightTheme
                    ? 'var(--theme-light-text-color-default)'
                    : 'var(--theme-dark-text-color-default)';
            document.body.style.color =
                theme === Theme.LightTheme
                    ? 'var(--theme-light-text-color-default)'
                    : 'var(--theme-dark-text-color-default)';
        }
    }, [theme, isLoading]);
};
