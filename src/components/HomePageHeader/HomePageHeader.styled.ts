import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        backgroundColor: 'var(--theme-light-background-tint-color-default)',
        // todo: use a standard color
    },
    [Theme.DarkTheme]: {
        backgroundColor: 'var(--theme-dark-background-tint-color-default)',
    },
};

export const OuterWrapper = styled.div`
    margin: 0;
`;

export const SiteBrandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].backgroundColor} };
    padding-top: 60px;
    padding-bottom: 80px;
`;
export const SocialLinksBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    top: -40px;
    position: relative;
`;

export const SocialLinksBarInnerWrapper = styled.div`
    width: 16rem;
`;

export const ThemeSwitcher = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

export const Label = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 20px;
`;
