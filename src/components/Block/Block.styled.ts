import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        titleTextColor: 'var(--theme-light-text-color-default)',
    },
    [Theme.DarkTheme]: {
        titleTextColor: 'var(--theme-dark-text-color-default)',
    },
};

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    margin-left: ${(props) => (props.padding ? '1.5rem' : '0')};
    margin-right: ${(props) => (props.padding ? '1.5rem' : '0')};
    margin-bottom: 3.6rem;
`;

export const TitleText = styled.div`
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].titleTextColor};
`;

export const Content = styled.div`
    margin-top: 1.4rem;
    font-size: var(--default-font-size);
`;
