import { ProductImagesDirectory } from 'src/constants/commonConstants';
import { Product } from 'src/constants/schema';
import { products } from 'src/mocks/apiResponseMock';
import { getSiteHost } from 'src/utils/commonUtils';
import { OuterWrapper, ProductLineCardWrapper } from './MoreProducts.styled';
import { ProductLineCard } from 'src/components/ProductLineCard/ProductLineCard';

/**
 * MoreProducts component.
 * @returns The rendered component.
 */
export const MoreProducts = () => {
    return (
        <OuterWrapper>
            {products.map((product: Product) => {
                const iconImage = product.images.find((image) => image.isIcon);
                const iconImageUrl = `${getSiteHost()}/${ProductImagesDirectory}/${iconImage?.imageName}`;

                return (
                    <ProductLineCardWrapper key={product.id}>
                        <ProductLineCard
                            imageUrl={iconImageUrl}
                            brand={product.brand}
                            title={product.title}
                            link={product.link}
                            backgroundColor={product.backgroundColor}
                        />
                    </ProductLineCardWrapper>
                );
            })}
        </OuterWrapper>
    );
};
