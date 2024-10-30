import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        defaultIconBackground: 'var(--default-light-theme-icon-background-color)',
        platformIconBackground: 'var(--default-light-theme-icon-background-color)',
        nameText: 'var(--default-light-theme-heading-level-6-color)',
        followersText: 'var(--default-light-theme-heading-level-6-color)',
    },
    [Theme.DarkTheme]: {
        defaultIconBackground: 'var(--default-dark-theme-icon-background-color)',
        platformIconBackground: 'var(--default-dark-theme-icon-background-color)',
        nameText: 'var(--default-dark-theme-heading-level-6-color)',
        followersText: 'var(--default-dark-theme-heading-level-6-color)',
    },
};

export const OuterWrapper = styled.div``;

export const ContentWrapper = styled.div`
    display: flex;
    gap: 0.8rem;
`;

export const Anchor = styled.a<{ href: string }>`
    text-decoration: none;
`;

export const DefaultIconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].defaultIconBackground} };
    height: 4rem;
    width: 4rem;
    border-radius: 0.4rem;
`;

export const PlatformIconBox = styled(DefaultIconBox)``;

export const PlatformDetails = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

export const Name = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].nameText};
    flex: 1;
    pointer-events: none;
`;

export const Followers = styled.div`
    flex: 1;

    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].followersText};
`;

export const NavigateIconBox = styled(DefaultIconBox)`
    background-color: transparent;
    width: 2rem;
    opacity: 40%;
`;
