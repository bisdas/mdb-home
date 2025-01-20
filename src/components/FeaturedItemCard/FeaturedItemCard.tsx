import { DelishBowlCategory } from 'src/constants/commonConstants';
import {
    OuterWrapper,
    ProductImageBoxOuter,
    ProductDetailsOuter,
    ProductImageBox,
    ProductDetails,
    Brand,
    Title,
    ProductImageContent,
    Anchor,
    CategoryChips,
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
    const clippedTitle = title.length > 120 ? `${title.substring(0, 100)}...` : title;

    return (
        <OuterWrapper>
            <ProductImageBoxOuter>
                <ProductImageBox>
                    <Anchor href={link} target="_blank">
                        <ProductImageContent imageUrl={imageUrl} />
                    </Anchor>
                </ProductImageBox>
            </ProductImageBoxOuter>
            <ProductDetailsOuter>
                <Anchor href={link} target="_blank">
                    <ProductDetails>
                        <Brand>{brand}</Brand>
                        <Title>{clippedTitle}</Title>
                        <CategoryChips>
                            {categories.map((category) => (
                                <CategoryChip category={category} key={category}>
                                    {category}
                                </CategoryChip>
                            ))}
                        </CategoryChips>
                    </ProductDetails>
                </Anchor>
            </ProductDetailsOuter>
        </OuterWrapper>
    );
};
