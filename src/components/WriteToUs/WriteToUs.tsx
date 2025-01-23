import { DelishBowlEmailAddress } from 'src/constants/dataConstants';
import { OuterWrapper, Content, Title, Paragraph, ContactEmail, EmailLabel, EmailAddress } from './WriteToUs.styled';

/**
 * WriteToUs component.
 * @returns The rendered component.
 */
export const WriteToUs = () => {
    return (
        <OuterWrapper>
            <Content>
                <Title>Write To Us</Title>
                <Paragraph>Do you have a suggestion or want to explore business opportunities?</Paragraph>
                <ContactEmail>
                    <EmailLabel>Write to us at</EmailLabel>
                    <EmailAddress>{DelishBowlEmailAddress}</EmailAddress>
                </ContactEmail>
            </Content>
        </OuterWrapper>
    );
};
