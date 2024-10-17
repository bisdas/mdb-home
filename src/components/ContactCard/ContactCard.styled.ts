import { Theme } from 'src/styles/themes';
import styled from 'styled-components/macro';

const colorOptions = {
    [Theme.LightTheme]: {
        defaultIconBackground: '#ededed',
        contactIconBackground: '#ededed',
        contactMethodText: '#7d7d7d;',
        contactAddressText: '#000000',
        navigateIconBackground: '#000000',
    },
    [Theme.DarkTheme]: {
        defaultIconBackground: '#000000',
        contactIconBackground: '#000000',
        contactMethodText: '#fefefe',
        contactAddressText: '#fefefe',
        navigateIconBackground: '#fefefe',
    },
};

// todo: complete dark theme colors

export const OuterWrapper = styled.div`
    display: flex;
    gap: 0.8rem;
`;

export const DefaultIconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof colorOptions } }) => colorOptions[theme.theme].defaultIconBackground} };
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
    font-family: var(--default-font-family);
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }: { theme: { theme: keyof typeof colorOptions } }) =>
        colorOptions[theme.theme].contactMethodText};
    flex: 1;
    margin-top: -0.2rem;
    pointer-events: none;
`;

export const Address = styled.div`
    flex: 1;

    & a {
        text-decoration: none;
        color: ${({ theme }) =>
            theme.theme === Theme.LightTheme
                ? 'var(--default-light-theme-font-color)'
                : 'var(--default-dark-theme-font-color)'};
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const NavigateIconBox = styled(DefaultIconBox)`
    background-color: transparent;
    width: 2rem;
`;
