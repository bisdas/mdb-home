import { DelishBowlCategory } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import styled from 'styled-components/macro';

const themeSetting = {
    [Theme.LightTheme]: {
        productImageBackground: 'var(--default-light-theme-image-background-color)',
        brandText: 'var(--default-light-theme-heading-level-6-color)',
        titleText: 'var(--default-light-theme-heading-level-6-color)',
        foodChipBackground: 'var(--light-theme-product-category-food-chip-color)',
        beautyChipBackground: 'var(--light-theme-product-category-beauty-chip-color)',
        lifestyleChipBackground: 'var(--light-theme-product-category-lifestyle-chip-color)',
    },
    [Theme.DarkTheme]: {
        productImageBackground: 'var(--default-dark-theme-image-background-color)',
        brandText: 'var(--default-dark-theme-heading-level-6-color)',
        titleText: 'var(--default-dark-theme-heading-level-6-color)',
        foodChipBackground: 'var(--dark-theme-product-category-food-chip-color)',
        beautyChipBackground: 'var(--dark-theme-product-category-beauty-chip-color)',
        lifestyleChipBackground: 'var(--dark-theme-product-category-lifestyle-chip-color)',
    },
};

export const OuterWrapper = styled.div``;

export const Anchor = styled.a<{ href: string }>`
    text-decoration: none;
    height: 100%;
    width: 100%;
`;

export const ProductImageBox = styled.div<{ theme: { theme: keyof typeof themeSetting } }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].productImageBackground} };
    border-radius: 0.4rem;
    box-sizing: border-box;
    height: 20rem;
    width: 20rem;
    overflow: hidden;
`;

export const ProductImageContent = styled.div<{ imageUrl: string }>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    flex: 1;
    height: 100%;
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
    position: relative;
    top: -2rem;
    left: 0.8rem;
    margin-right: 0.6rem;
`;

export const ProductDetails = styled.div`
    width: 100%;
    margin-top: 1rem;
`;

export const Brand = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].brandText};
    pointer-events: none;
`;

export const Title = styled.div`
    color: ${({ theme }: { theme: { theme: keyof typeof themeSetting } }) => themeSetting[theme.theme].titleText};
    font-size: 1.2rem;
    font-weight: normal;
    white-space: normal;
    margin-top: 0.4rem;
`;
