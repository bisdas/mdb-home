import { Block } from 'src/components/Block/Block';
import { OuterWrapper } from './Home.styled';
import { ContactCard } from 'src/components/ContactCard/ContactCard';
import EmailIcon from 'src/assets/icons/email.svg';
import { ContactMethod } from 'src/constants/commonConstants';

/**
 * Home component.
 * @returns component JSX.
 */
export const Home = () => {
    return (
        <OuterWrapper>
            <Block title="Contact us" padding>
                <ContactCard
                    icon={
                        // @ts-expect-error width prop is not recognized
                        <EmailIcon width="1.8em" height="1.8em" />
                    }
                    method={ContactMethod.Email}
                    address="mailto:mydelishbowl.letterbox@gmail.com"
                    addressText="mydelishbowl.letterbox@gmail.com"
                />
            </Block>
        </OuterWrapper>
    );
};
