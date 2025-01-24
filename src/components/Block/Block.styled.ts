import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        titleTextColor: 'var(--theme-light-heading-level-1-color-default)',
        subtitleTextColor: 'var(--theme-light-heading-level-2-color-default)',
    },
    [Theme.DarkTheme]: {
        titleTextColor: 'var(--theme-dark-heading-level-1-color-default)',
        subtitleTextColor: 'var(--theme-dark-heading-level-2-color-default)',
    },
};

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    padding-left: ${(props) => (props.padding ? '1.5rem' : '0')};
    padding-right: ${(props) => (props.padding ? '1.5rem' : '0')};
    box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleText = styled.div`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].titleTextColor};
    user-select: none;
`;

export const SubtitleText = styled.div`
    width: 70%;
    text-align: center;
    margin-top: 0.2rem;
    font-size: 1.5rem;
    font-weight: 300;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
        themeSetting[theme.theme].subtitleTextColor};
`;

export const Content = styled.div`
    margin-top: 2rem;
    font-size: var(--default-font-size);
    display: flex;
    justify-content: center;
`;
