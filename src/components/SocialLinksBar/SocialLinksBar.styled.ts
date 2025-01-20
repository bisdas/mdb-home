import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        contentBackgroundColor: 'var(--theme-light-background-highlight-color-default)',
    },
    [Theme.DarkTheme]: {
        contentBackgroundColor: 'var(--theme-dark-background-highlight-color-default)',
    },
};
export const OuterWrapper = styled.div`
    border-radius: 1.6rem;
    height: 92px;
    overflow: hidden;
`;

export const ContentWrapper = styled.div`
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].contentBackgroundColor} };
    display: flex;
    height: 100%;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
`;

export const SocialProfileItem = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;
