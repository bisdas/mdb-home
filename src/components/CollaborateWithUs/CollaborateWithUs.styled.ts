import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        backgroundColor: 'var(--theme-light-background-highlight-color-default)',
        emailAddressBackground: 'var(--theme-light-background-color-default)',
        defaultText: 'var(--theme-light-text-color-default)',
        emailAddressText: 'var(--theme-light-text-color-default)',
    },
    [Theme.DarkTheme]: {
        backgroundColor: 'var(--theme-dark-background-highlight-color-default)',
        emailAddressBackground: 'var(--theme-dark-background-color-default)',
        defaultText: 'var(--theme-dark-text-color-default)',
        emailAddressText: 'var(--theme-dark-text-color-default)',
    },
};

export const OuterWrapper = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    background: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].backgroundColor} };
    padding: 2rem;
    border-radius: 40px;
`;

export const Paragraph = styled.div`
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].defaultText};
    font-size: 1.2rem;
    font-weight: normal;
    white-space: normal;
    text-align: center;
`;

export const ContactEmail = styled.div`
    width: 100%;
`;

export const EmailLabel = styled.div`
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].defaultText};
    font-size: 1.2rem;
    font-weight: 500;
    white-space: normal;
    margin-bottom: 16px;
    text-align: center;
`;

export const EmailAddress = styled.div`
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
        themeSetting[theme.theme].emailAddressText};
    background: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) =>
        themeSetting[theme.theme].emailAddressBackground};
    font-size: 1.2rem;
    font-weight: 700;
    white-space: normal;
    border-radius: 2rem;
    padding: 20px;
    text-align: center;
`;
