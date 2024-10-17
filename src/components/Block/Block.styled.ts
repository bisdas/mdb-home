import { Theme } from 'src/styles/themes';
import styled from 'styled-components/macro';

const colorOptions = {
    [Theme.LightTheme]: {
        titleTextColor: 'var(--default-light-theme-font-color)',
    },
    [Theme.DarkTheme]: {
        titleTextColor: 'var(--default-dark-theme-font-color)',
    },
};

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    margin-left: ${(props) => (props.padding ? '1.5rem' : '0')};
    margin-right: ${(props) => (props.padding ? '1.5rem' : '0')};
    pointer-events: none;
`;

export const TitleText = styled.div`
    font-family: var(--default-font-family);
    font-size: 2.2rem;
    font-weight: 800;
    color: ${({ theme }: { theme: { theme: keyof typeof colorOptions } }) =>
        colorOptions[theme.theme].titleTextColor};
`;

export const Content = styled.div`
    margin-top: 1.4rem;
    font-family: var(--default-font-family);
    font-size: var(--default-font-size);
`;
