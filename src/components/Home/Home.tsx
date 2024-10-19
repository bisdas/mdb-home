import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
import { ContactCard } from 'src/components/ContactCard/ContactCard';
import EmailIcon from 'src/assets/icons/email.svg';
import { ContactMethod } from 'src/constants/commonConstants';
import { useExperienceStore } from 'src/stores/experienceStore';
import { Theme } from 'src/constants/experienceConstants';

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
                            const newTheme =
                                experience.theme === Theme.LightTheme
                                    ? Theme.DarkTheme
                                    : Theme.LightTheme;
                            setTheme(newTheme);
                        }}
                    >
                        Toggle theme
                    </button>
                </div>
            </Block>
            <Block title="Contact us" padding>
                <ContactCard
                    icon={
                        // @ts-expect-error width prop is not recognized
                        <EmailIcon
                            width="1.8em"
                            height="1.8em"
                            style={{
                                fill: `${experience.theme === Theme.DarkTheme ? '#ffffff' : '#000000'}`,
                            }}
                        />
                    }
                    method={ContactMethod.Email}
                    address="mailto:mydelishbowl.letterbox@gmail.com"
                    addressText="mydelishbowl.letterbox@gmail.com"
                />
            </Block>
        </OuterWrapper>
    );
};
