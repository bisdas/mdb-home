import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        backgroundColor: '#ededed',
        // todo: use a standard color
    },
    [Theme.DarkTheme]: {
        backgroundColor: '#282828',
    },
};

export const OuterWrapper = styled.div`
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].backgroundColor} };
    padding-top: 60px;
    padding-bottom: 60px;
`;

export const SiteBranding = styled.div``;

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
