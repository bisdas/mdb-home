import { DelishBowlCategory } from 'src/constants/commonConstants';
import {
    OuterWrapper,
    ProductImageBox,
    ProductDetails,
    Brand,
    Title,
    ProductImageContent,
    Anchor,
    CategoryChip,
} from './FeaturedItemCard.styled';

interface FeaturedItemCardProps {
    brand: string;
    title: string;
    imageUrl: string;
    link: string;
    backgroundColor: string;
    categories: DelishBowlCategory[];
}

/**
 * FeaturedItemCard component
 * @param props - props
 * @param props.imageUrl - The image URL of the product.
 * @param props.brand - The brand of the product.
 * @param props.title - The title of the product.
 * @param props.link - The link to the product.
 * @returns The rendered component.
 */
export const FeaturedItemCard = (props: FeaturedItemCardProps) => {
    const { imageUrl, brand, title, link, categories } = props;

    return (
        <OuterWrapper>
            <ProductImageBox>
                <Anchor href={link} target="_blank">
                    <ProductImageContent imageUrl={imageUrl} />
                    {categories.map((category) => (
                        <CategoryChip category={category} key={category}>
                            {category}
                        </CategoryChip>
                    ))}
                </Anchor>
            </ProductImageBox>
            <ProductDetails>
                <Brand>{brand}</Brand>
                <Title>{title}</Title>
            </ProductDetails>
        </OuterWrapper>
    );
};
