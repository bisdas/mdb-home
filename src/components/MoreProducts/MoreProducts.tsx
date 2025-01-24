import { ProductImagesDirectory } from 'src/constants/commonConstants';
import { Product } from 'src/constants/schema';
import { products } from 'src/mocks/apiResponseMock';
import { getSiteHost } from 'src/utils/commonUtils';
import { OuterWrapper, ProductLineCardWrapper } from './MoreProducts.styled';
import { ProductLineCard } from 'src/components/ProductLineCard/ProductLineCard';
import { useExperienceStore } from 'src/stores/experienceStore';
import { Theme } from 'src/constants/experienceConstants';

/**
 * MoreProducts component.
 * @returns The rendered component.
 */
export const MoreProducts = () => {
    const { experience } = useExperienceStore();
    return (
        <OuterWrapper>
            {products.map((product: Product, index: number) => {
                const iconImage = product.images.find((image) => image.isIcon);
                const iconImageUrl = `${getSiteHost()}/${ProductImagesDirectory}/${iconImage?.imageName}`;
                const isLastItem = index === products.length - 1;
                const borderColor =
                    experience.theme === Theme.LightTheme
                        ? 'var(--default-light-theme-border-color)'
                        : 'var(--default-dark-theme-border-color)';

                return (
                    <ProductLineCardWrapper key={product.id} border={!isLastItem} borderColor={borderColor}>
                        <ProductLineCard
                            imageUrl={iconImageUrl}
                            brand={product.brand}
                            title={product.title}
                            link={product.link}
                            // backgroundColor={product.backgroundColor}
                        />
                    </ProductLineCardWrapper>
                );
            })}
        </OuterWrapper>
    );
};
