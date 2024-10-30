import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
import { useExperienceStore } from 'src/stores/experienceStore';
import { Theme } from 'src/constants/experienceConstants';
import { MoreProducts } from 'src/components/MoreProducts/MoreProducts';
import { ContactUs } from 'src/components/ContactUs/ContactUs';
import { OurPages } from 'src/components/OurPages/OurPages';

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    const { experience, setTheme } = useExperienceStore();

    return (
        <OuterWrapper>
            <Block title="">
                <div>
                    <div style={{ color: '#ffffff' }}>Current theme: {experience.theme}</div>
                    <div style={{ color: '#000000' }}>Current theme: {experience.theme}</div>
                    <button
                        style={{ fontSize: '48px' }}
                        onClick={() => {
                            const newTheme = experience.theme === Theme.LightTheme ? Theme.DarkTheme : Theme.LightTheme;
                            setTheme(newTheme);
                        }}
                    >
                        Toggle theme
                    </button>
                </div>
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
