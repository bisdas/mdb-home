import { Product } from 'src/constants/schema';
import { products } from 'src/mocks/apiResponseMock';
import { OuterWrapper, Content, Item } from './FeaturedItems.styled';
import { FeaturedItemCard } from 'src/components/FeaturedItemCard/FeaturedItemCard';

/**
 * FeaturedItems component.
 * @returns The rendered component.
 */
export const FeaturedItems = () => {
    const featuredProducts = products.filter((product) => product.isFeatured);

    return (
        <OuterWrapper>
            <Content>
                {featuredProducts.map((product: Product, index: number) => {
                    const imageUrl = `productImages/${product.images[0].imageName}`;

                    return (
                        <Item key={product.id} isLastItem={index === featuredProducts.length - 1}>
                            <FeaturedItemCard
                                imageUrl={imageUrl}
                                brand={product.brand}
                                title={product.title}
                                link={product.link}
                                backgroundColor={product.backgroundColor}
                                categories={product.categories}
                            />
                        </Item>
                    );
                })}
            </Content>
        </OuterWrapper>
    );
};
