/* eslint-disable max-lines-per-function, camelcase */
import { Block } from 'src/components/Block/Block';
// import { useExperienceStore } from 'src/stores/experienceStore';
// import { Theme } from 'src/constants/experienceConstants';
import {
    OuterWrapper,
    GoToTopWrapper,
    ShopWrapper,
    CollaborateWithUsWrapper,
    ShopIntro,
    ShopLink,
    // ThemeSwitcher,
    // Label
} from './Home.styled';
// import { ToggleSwitch } from 'src/components/shared/ToggleSwitch/ToggleSwitch';
import { FeaturedItems } from 'src/components/FeaturedItems/FeaturedItems';
import { HomePageHeader } from 'src/components/HomePageHeader/HomePageHeader';
import { BlockSeparator } from 'src/components/BlockSeparator/BlockSeparator';
import { CollaborateWithUs } from 'src/components/CollaborateWithUs/CollaborateWithUs';
import { WriteToUs } from 'src/components/WriteToUs/WriteToUs';
import { GoToTop } from 'src/components/shared/GoToTop/GoToTop';
import ShopCarousal from 'src/components/ShopCarousal/ShopCarousal';
import { amazonInfluencerShopCarousalmages } from 'src/mocks/apiResponseMock';
import { CucumberWebsiteAddress } from 'src/constants/dataConstants';
import { createThrottledLogAnalyticsEvent } from 'src/utils/analyticsUtils';
import { useEffect } from 'react';
import { Events } from 'src/constants/analyticsConstants';

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    // const { experience, setTheme } = useExperienceStore();
    // const isLightTheme = experience.theme === Theme.LightTheme;

    const logAnalyticsEventThrottled = createThrottledLogAnalyticsEvent(250);

    useEffect(() => {
        logAnalyticsEventThrottled(Events.load_page, {
            page_name: 'home',
        });
    }, [logAnalyticsEventThrottled]);

    const shopCarousalImages = amazonInfluencerShopCarousalmages.map(
        (image: string) => `amazonShopCarousalImages/${image}`,
    );

    return (
        <OuterWrapper>
            <HomePageHeader />
            <BlockSeparator />
            <Block title="Featured Products" subtitle="New arrivals & top products from our sponsors" padding>
                <FeaturedItems />
            </Block>
            <BlockSeparator />
            <Block title="Collaborate With Us" padding>
                <CollaborateWithUsWrapper>
                    <CollaborateWithUs />
                </CollaborateWithUsWrapper>
            </Block>
            <BlockSeparator />
            <Block title="Shop" subtitle="Cucumber by Delish Bowl" padding>
                <ShopWrapper>
                    <ShopCarousal images={shopCarousalImages} />
                    <ShopIntro>
                        Shop our top recommendations for beauty, personal care, home & kitchen essentials — at Cucumber!
                    </ShopIntro>
                    <ShopLink href={CucumberWebsiteAddress} target="_blank">
                        Visit Site
                    </ShopLink>
                </ShopWrapper>
            </Block>
            <Block padding>
                <GoToTopWrapper>
                    <GoToTop />
                </GoToTopWrapper>
            </Block>
            <Block>
                <WriteToUs />
            </Block>
            {/* <ThemeSwitcher>
                <Label>Lights</Label>
                <ToggleSwitch
                    isOn={isLightTheme}
                    onChange={(isOn) => {
                        setTheme(isOn ? Theme.LightTheme : Theme.DarkTheme);
                    }}
                />
            </ThemeSwitcher> */}
        </OuterWrapper>
    );
};
