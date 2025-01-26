import { Product } from 'src/constants/schema';
import { products } from 'src/mocks/apiResponseMock';
import { OuterWrapper, Item, ContentStacked } from './FeaturedItems.styled';
import { FeaturedItemCard } from 'src/components/FeaturedItemCard/FeaturedItemCard';

/**
 * FeaturedItems component.
 * @returns The rendered component.
 */
export const FeaturedItems = () => {
    const featuredProducts = products.filter((product) => product.isFeatured);

    return (
        <OuterWrapper>
            <ContentStacked>
                {featuredProducts.map((product: Product, index: number) => {
                    const imageUrl = `productImages/${product.images[0].imageName}`;
                    const imageBackgroundColor = product.images[0].backgroundColor;
                    const isLastItem = index === featuredProducts.length - 1;

                    return (
                        <Item key={product.id} isLastitem={isLastItem}>
                            <FeaturedItemCard
                                imageUrl={imageUrl}
                                brand={product.brand}
                                title={product.title}
                                links={product.links}
                                categories={product.categories}
                                backgroundColor={imageBackgroundColor}
                            />
                        </Item>
                    );
                })}
            </ContentStacked>
        </OuterWrapper>
    );
};
