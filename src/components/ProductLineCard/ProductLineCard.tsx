import {
    OuterWrapper,
    ProductImageBox,
    ProductDetails,
    Brand,
    Title,
    NavigateIconBox,
    ProductImageContent,
} from './ProductLineCard.styled';
import ArrowNextRightIcon from 'src/components/ArrowNextRightIcon';
import { Theme } from 'src/constants/experienceConstants';
import { useExperienceStore } from 'src/stores/experienceStore';

interface ProductLineCardProps {
    brand: string;
    title: string;
    imageUrl: string;
    link: string;
    backgroundColor: string;
}

/**
 * ProductLineCard component
 * @param props - props
 * @param props.imageUrl - The image URL of the product.
 * @param props.brand - The brand of the product.
 * @param props.title - The title of the product.
 * @param props.link - The link to the product.
 * @returns The rendered component.
 */
export const ProductLineCard = (props: ProductLineCardProps) => {
    const { imageUrl, brand, title, link } = props;
    const { experience } = useExperienceStore();

    return (
        <OuterWrapper>
            <ProductImageBox>
                <ProductImageContent imageUrl={imageUrl} />
            </ProductImageBox>
            <ProductDetails>
                <Brand>{brand}</Brand>
                <Title>
                    <a target="_blank" href={link} rel="noreferrer">
                        {title}
                    </a>
                </Title>
            </ProductDetails>
            <NavigateIconBox>
                <ArrowNextRightIcon
                    width="1em"
                    height="1em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--default-light-theme-icon-color)'
                            : 'var(--default-dark-theme-icon-color)'
                    }
                />
            </NavigateIconBox>
        </OuterWrapper>
    );
};
