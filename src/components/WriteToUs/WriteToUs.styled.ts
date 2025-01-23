import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        backgroundColor: 'var(--theme-light-background-tint-color-default)',
        textColor: 'var(--theme-light-text-color-default)',
    },
    [Theme.DarkTheme]: {
        backgroundColor: 'var(--theme-dark-background-highlight-color-default)',
        textColor: 'var(--theme-dark-text-color-default)',
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
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].textColor};
`;

export const Title = styled.div`
    font-size: 1.8rem;
    // todo: define standard font size for titles, subtitle, normal text, highlighted normal text.
    font-weight: 700;
    white-space: normal;
    text-align: center;
`;

export const Paragraph = styled.div`
    font-size: 1.2rem;
    font-weight: normal;
    white-space: normal;
    text-align: center;
`;

export const ContactEmail = styled.div`
    width: 100%;
`;

export const EmailLabel = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    white-space: normal;
    text-align: center;
    margin-bottom: 0.3rem;
`;

export const EmailAddress = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    white-space: normal;
    border-radius: 2rem;
    text-align: center;
`;
