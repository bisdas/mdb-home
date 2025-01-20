import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
// import { MoreProducts } from 'src/components/MoreProducts/MoreProducts';
// import { ContactUs } from 'src/components/ContactUs/ContactUs';
// import { OurPages } from 'src/components/OurPages/OurPages';
import { FeaturedItems } from 'src/components/FeaturedItems/FeaturedItems';
import { HomePageHeader } from 'src/components/HomePageHeader/HomePageHeader';

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    return (
        <OuterWrapper>
            <HomePageHeader />
            <Block title="Featured Items" subtitle="New arrivals & top products from our sponsors" padding>
                <FeaturedItems />
            </Block>
            {/*<Block title="Featured products" padding>
                <MoreProducts />
            </Block>
            <Block title="Contact us" padding>
                <ContactUs />
            </Block> */}
        </OuterWrapper>
    );
};
