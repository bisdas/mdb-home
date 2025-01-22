import { DelishBowlEmailAddress } from 'src/constants/dataConstants';
import { OuterWrapper, Content, Paragraph, ContactEmail, EmailLabel, EmailAddress } from './CollaborateWithUs.styled';

/**
 * CollaborateWithUs component.
 * @returns The rendered component.
 */
export const CollaborateWithUs = () => {
    return (
        <OuterWrapper>
            <Content>
                <Paragraph>Are you a brand, or an individual looking to expand your business?</Paragraph>
                <Paragraph>
                    We believe that we working together can help you reach a broader audience, and let your business
                    grow at a faster pace.
                </Paragraph>

                <ContactEmail>
                    <EmailLabel>Write to us at</EmailLabel>
                    <EmailAddress>{DelishBowlEmailAddress}</EmailAddress>
                </ContactEmail>
            </Content>
        </OuterWrapper>
    );
};
