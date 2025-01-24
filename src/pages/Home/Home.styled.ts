import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        defaultTextColor: 'var(--theme-light-text-color-default)',
        shopLinkColor: 'var(--brand-color-green)',
    },
    [Theme.DarkTheme]: {
        defaultTextColor: 'var(--theme-dark-text-color-default)',
        shopLinkColor: 'var(--brand-color-yellow)',
    },
};

export const OuterWrapper = styled.div``;

export const GoToTopWrapper = styled.div`
    padding-top: 2.8rem;
    padding-bottom: 2.8rem;
`;

export const CollaborateWithUsWrapper = styled.div`
    padding-bottom: 1.8rem;
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

export const ShopWrapper = styled.div``;

export const ShopIntro = styled.div`
    margin: 40px 60px;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
        themeSetting[theme.theme].defaultTextColor};
    font-size: 1.3rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
`;

export const ShopLink = styled.a`
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].shopLinkColor};
    font-size: 1.3rem;
    font-weight: 600;
    white-space: normal;
    text-align: center;
    display: block;
    text-decoration: underline;
`;

// todo: move themeswitcher as a separate component
