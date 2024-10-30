import { ContactOption } from 'src/constants/schema';
import { contactOptions } from 'src/mocks/apiResponseMock';
import { OuterWrapper, ContactCardWrapper } from './ContactUs.styled';
import { ContactCard } from 'src/components/ContactCard/ContactCard';

/**
 * ContactUs component.
 * @returns The rendered component.
 */
export const ContactUs = () => {
    return (
        <OuterWrapper>
            {contactOptions.map((contactOption: ContactOption) => {
                return (
                    <ContactCardWrapper key={contactOption.method}>
                        <ContactCard
                            method={contactOption.method}
                            address={contactOption.address}
                            addressText={contactOption.addressText}
                        />
                    </ContactCardWrapper>
                );
            })}
        </OuterWrapper>
    );
};
