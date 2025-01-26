/* eslint-disable max-lines-per-function */
import { DelishBowlCategory } from 'src/constants/commonConstants';
import {
    OuterWrapper,
    ProductWrapperOuter,
    ProductWrapper,
    BuyingLinksWrapper,
    BuyingLink,
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
import { ProductLink } from 'src/constants/schema';
import { useState } from 'react';

interface FeaturedItemCardProps {
    brand: string;
    title: string;
    imageUrl: string;
    links: ProductLink[];
    backgroundColor: string;
    categories: DelishBowlCategory[];
}

/**
 * FeaturedItemCard component
 * @param props - props
 * @param props.imageUrl - The image URL of the product.
 * @param props.brand - The brand of the product.
 * @param props.title - The title of the product.
 * @param props.links - The links to the product.
 * @param props.categories - The categories of the product.
 * @param props.backgroundColor - The background color of the product image.
 * @returns The rendered component.
 */
export const FeaturedItemCard = (props: FeaturedItemCardProps) => {
    const [isBuyingLinksVisible, setIsBuyingLinksVisible] = useState(false);
    const { imageUrl, brand, title, links, categories, backgroundColor } = props;
    const clippedTitle = title.length > 130 ? `${title.substring(0, 130)}...` : title;
    const hasMultipleLinks = links.length > 1;

    /** Toggles the visibility of the buying links. */
    const toggleBuyingLinks = () => {
        setIsBuyingLinksVisible(!isBuyingLinksVisible);
    };

    return (
        <OuterWrapper>
            {hasMultipleLinks && (
                <ProductWrapperOuter>
                    <ProductWrapper onClick={toggleBuyingLinks}>
                        <ProductImageBoxOuter>
                            <ProductImageBox backgroundColor={backgroundColor}>
                                <ProductImageContent imageUrl={imageUrl} />
                            </ProductImageBox>
                        </ProductImageBoxOuter>
                        <ProductDetailsOuter>
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
                        </ProductDetailsOuter>
                    </ProductWrapper>

                    {isBuyingLinksVisible && (
                        <BuyingLinksWrapper>
                            {links.map((link, index) => (
                                <BuyingLink key={index} href={link.link} target="_blank">
                                    Buy from {link.title}
                                </BuyingLink>
                            ))}
                        </BuyingLinksWrapper>
                    )}
                </ProductWrapperOuter>
            )}
            {!hasMultipleLinks && (
                <ProductWrapper>
                    <ProductImageBoxOuter>
                        <ProductImageBox backgroundColor={backgroundColor}>
                            <Anchor href={links[0].link} target="_blank">
                                <ProductImageContent imageUrl={imageUrl} />
                            </Anchor>
                        </ProductImageBox>
                    </ProductImageBoxOuter>
                    <ProductDetailsOuter>
                        <Anchor href={links[0].link} target="_blank">
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
                </ProductWrapper>
            )}
        </OuterWrapper>
    );
};
