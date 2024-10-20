import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
import { ContactCard } from 'src/components/ContactCard/ContactCard';
import EmailIcon from 'src/components/EmailIcon';
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
                        <EmailIcon
                            width="1.8em"
                            height="1.8em"
                            color={
                                experience.theme === Theme.LightTheme
                                    ? 'var(--default-light-theme-icon-color)'
                                    : 'var(--default-dark-theme-icon-color)'
                            }
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
