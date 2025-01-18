import { ContactOption } from 'src/constants/schema';
import { contactOptions } from 'src/mocks/apiResponseMock';
import { OuterWrapper, ContactCardWrapper } from './ContactUs.styled';

/**
 * ContactUs component.
 * @returns The rendered component.
 */
export const ContactUs = () => {
    return (
        <OuterWrapper>
            {contactOptions.map((contactOption: ContactOption) => {
                return <ContactCardWrapper key={contactOption.method}></ContactCardWrapper>;
            })}
        </OuterWrapper>
    );
};
