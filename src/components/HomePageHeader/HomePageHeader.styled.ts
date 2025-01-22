import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        backgroundColor: 'var(--theme-light-background-tint-color-default)',
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
    user-select: none;
`;
export const SocialLinksBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    top: -46px;
    position: relative;
`;

export const SocialLinksBarInnerWrapper = styled.div`
    width: 18rem;
`;
