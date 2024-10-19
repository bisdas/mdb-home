import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const methodFontFamily = 'var(--default-font-family)';
const themeSetting = {
    [Theme.LightTheme]: {
        defaultIconBackground: 'var(--default-light-theme-icon-background-color)',
        contactIconBackground: 'var(--default-light-theme-icon-background-color)',
        contactMethodText: 'var(--default-light-theme-heading-level-5-color)',
        contactAddressText: 'var(--default-light-theme-heading-level-6-color)',
    },
    [Theme.DarkTheme]: {
        defaultIconBackground: 'var(--default-dark-theme-icon-background-color)',
        contactIconBackground: 'var(--default-dark-theme-icon-background-color)',
        contactMethodText: 'var(--default-dark-theme-heading-level-5-color)',
        contactAddressText: 'var(--default-dark-theme-heading-level-6-color)',
    },
};

export const OuterWrapper = styled.div`
    display: flex;
    gap: 0.8rem;
`;

export const DefaultIconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].defaultIconBackground} };
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 0.4rem;
`;

export const MethodIconBox = styled(DefaultIconBox)``;

export const MethodDetails = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

export const Method = styled.div`
    font-family: ${methodFontFamily};
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
        themeSetting[theme.theme].contactMethodText};
    flex: 1;
    margin-top: -0.1rem;
    pointer-events: none;
`;

export const Address = styled.div`
    flex: 1;

    & a {
        text-decoration: none;
        color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
            themeSetting[theme.theme].contactAddressText};
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const NavigateIconBox = styled(DefaultIconBox)`
    background-color: transparent;
    width: 2rem;
`;
