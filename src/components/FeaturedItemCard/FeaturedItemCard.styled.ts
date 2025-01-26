import { DelishBowlCategory } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        brandText: 'var(--theme-light-text-color-default)',
        titleText: 'var(--theme-light-text-color-default)',
        buttonText: 'var(--theme-light-text-color-default)',
        foodChipBackground: 'var(--theme-light-category-food-bg-color-default)',
        beautyChipBackground: 'var(--theme-light-category-beauty-bg-color-default)',
        lifestyleChipBackground: 'var(--theme-light-category-lifestyle-bg-color-default)',
        borderColor: '#dadada',
        linkHighlightColor: 'var(--theme-light-background-highlight-color-default)',
    },
    [Theme.DarkTheme]: {
        brandText: 'var(--theme-dark-text-color-default)',
        titleText: 'var(--theme-dark-text-color-default)',
        buttonText: 'var(--theme-dark-text-color-default)',
        foodChipBackground: 'var(--theme-dark-category-food-bg-color-default)',
        beautyChipBackground: 'var(--theme-dark-category-beauty-bg-color-default)',
        lifestyleChipBackground: 'var(--theme-dark-category-lifestyle-bg-color-default)',
        borderColor: '#282828',
        linkHighlightColor: 'var(--theme-dark-background-highlight-color-default)',
    },
};

export const OuterWrapper = styled.div``;
export const ProductWrapperOuter = styled.div``;
export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

export const BuyingLinksWrapper = styled.div`
    padding: 1.4rem 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

export const Anchor = styled.a<{ href: string }>`
    text-decoration: none;
    height: 100%;
    width: 100%;
`;

export const BuyingLink = styled.a`
    display: block;
    font-size: 1.1rem;
    text-decoration: none;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].linkHighlightColor} };
    text-align: center;
    padding: 0.3rem 0;
    border-radius: 40px;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].buttonText} };
    font-weight: 500;
`;

// todo: move buying link as a link button

export const ProductImageBoxOuter = styled.div`
    height: 9rem;
    width: 9rem;
    overflow: hidden;
`;

export const ProductImageBox = styled.div<{ backgroundColor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 0.4rem;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

export const ProductImageContent = styled.div<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    flex: 1;
    height: 100%;
`;

export const ProductDetailsOuter = styled.div`
    position: relative;
    top: -0.2rem;
    flex: 1;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    height: 100%;
`;

export const CategoryChips = styled.div`
    top: 0.2px;
`;

export const CategoryChip = styled.span<{ category: DelishBowlCategory }>`
    background: ${({
        theme,
        category,
    }: {
        theme: { theme: keyof typeof themeSetting };
        category: DelishBowlCategory;
    }) => {
        if (category === DelishBowlCategory.Food) {
            return themeSetting[theme.theme].foodChipBackground;
        }
        if (category === DelishBowlCategory.Beauty) {
            return themeSetting[theme.theme].beautyChipBackground;
        }
        if (category === DelishBowlCategory.Lifestyle) {
            return themeSetting[theme.theme].lifestyleChipBackground;
        }

        return 'transparent';
    }};
    color: white;
    padding: 0.1rem 1rem;
    border-radius: 0.7rem;
    margin-right: 0.6rem;
    font-size: 0.9rem;
`;

export const Brand = styled.div`
    font-weight: 600;
    font-size: 1.14rem;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].brandText};
    pointer-events: none;
`;

export const Title = styled.div`
    flex: 1;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].titleText};
    font-size: 1.14rem;
    font-weight: normal;
    white-space: normal;
`;
