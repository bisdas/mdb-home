import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        borderColor: '#dadada',
    },
    [Theme.DarkTheme]: {
        borderColor: '#282828',
    },
};

export const OuterWrapper = styled.div``;

export const ContentStacked = styled.div`
    width: 100%;
`;

export const Item = styled.div<{ isLastitem: boolean; theme: { theme: keyof typeof themeSetting } }>`
    padding-bottom: 1.2rem;
    margin-bottom: 1.2rem;
    border-bottom: ${({ isLastitem, theme }: { isLastitem: boolean; theme: { theme: keyof typeof themeSetting } }) =>
        !isLastitem ? `1px solid ${(themeSetting as any)[theme.theme].borderColor}` : 'none'};
`;
