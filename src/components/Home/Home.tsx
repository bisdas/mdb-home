import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
import { useExperienceStore } from 'src/stores/experienceStore';
import { Theme } from 'src/constants/experienceConstants';
import { MoreProducts } from 'src/components/MoreProducts/MoreProducts';
import { ContactUs } from 'src/components/ContactUs/ContactUs';
import { OurPages } from 'src/components/OurPages/OurPages';
import { FeaturedItems } from 'src/components/FeaturedItems/FeaturedItems';
import { ToggleSwitch } from 'src/components/shared/ToggleSwitch/ToggleSwitch';

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    const { experience, setTheme } = useExperienceStore();
    const isLightTheme = experience.theme === Theme.LightTheme;

    return (
        <OuterWrapper>
            <Block title="">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '50px' }}>
                    <div style={{ textAlign: 'center', alignSelf: 'flex-end', width: '100px' }}>Lights</div>
                    <div style={{ alignSelf: 'flex-end' }}>
                        <ToggleSwitch
                            isOn={isLightTheme}
                            onChange={(isOn) => {
                                setTheme(isOn ? Theme.LightTheme : Theme.DarkTheme);
                            }}
                        />
                    </div>
                </div>
            </Block>
            <Block title="Featured Items" padding>
                <FeaturedItems />
            </Block>
            <Block title="Our Pages" padding>
                <OurPages />
            </Block>
            <Block title="More products" padding>
                <MoreProducts />
            </Block>
            <Block title="Contact us" padding>
                <ContactUs />
            </Block>
        </OuterWrapper>
    );
};
