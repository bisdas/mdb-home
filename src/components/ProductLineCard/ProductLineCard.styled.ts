import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const methodFontFamily = 'var(--default-font-family)';
const themeSetting = {
    [Theme.LightTheme]: {
        defaultIconBackground: 'var(--default-light-theme-icon-background-color)',
        productImageBackground: 'var(--default-light-theme-icon-background-color)',
        brandText: 'var(--default-light-theme-heading-level-6-color)',
        titleText: 'var(--default-light-theme-heading-level-6-color)',
    },
    [Theme.DarkTheme]: {
        defaultIconBackground: 'var(--default-dark-theme-icon-background-color)',
        productImageBackground: 'var(--default-dark-theme-icon-background-color)',
        brandText: 'var(--default-dark-theme-heading-level-6-color)',
        titleText: 'var(--default-dark-theme-heading-level-6-color)',
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
    background
    height: 4.2rem;
    width: 4.2rem;
    border-radius: 0.4rem;
`;

export const ProductImageBox = styled(DefaultIconBox)`
    padding: 0.4rem;
    box-sizing: border-box;
    height: 4.2rem; /* Same as DefaultIconBox width */
    width: 4.2rem; /* Ensure width is specified */
`;

export const ProductImageContent = styled.div<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    flex: 1;
    height: 100%;
`;

export const ProductDetails = styled.div`
    flex: 4;
`;

export const Brand = styled.div`
    font-family: ${methodFontFamily};
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].brandText};
    flex: 1;
    margin-top: -0.3rem;
    pointer-events: none;
`;

export const Title = styled.div`
    margin-top: 0.2rem;

    & a {
        text-decoration: none;
        color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].titleText};
        font-size: 1rem;
        font-weight: normal;
    }
`;

export const NavigateIconBox = styled(DefaultIconBox)`
    background-color: transparent;
    width: 2rem;
    opacity: 40%;
`;
