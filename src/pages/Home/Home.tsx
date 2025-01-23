import { Block } from 'src/components/Block/Block';
// import { useExperienceStore } from 'src/stores/experienceStore';
// import { Theme } from 'src/constants/experienceConstants';
import {
    OuterWrapper,
    GoToTopWrapper,
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

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    // const { experience, setTheme } = useExperienceStore();
    // const isLightTheme = experience.theme === Theme.LightTheme;

    return (
        <OuterWrapper>
            <HomePageHeader />
            <BlockSeparator />
            <Block title="Featured Items" subtitle="New arrivals & top products from our sponsors" padding>
                <FeaturedItems />
            </Block>
            <BlockSeparator />
            <Block title="Collaborate With Us" padding>
                <CollaborateWithUs />
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
