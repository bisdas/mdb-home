import { ContactOption } from 'src/constants/schema';
import { contactOptions } from 'src/mocks/apiResponseMock';
import { OuterWrapper, ContactCardWrapper } from './ContactUs.styled';
import { ContactCard } from 'src/components/ContactCard/ContactCard';
import { ContactMethodIcon } from 'src/components/ContactMethodIcon/ContactMethodIcon';

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
                            icon={<ContactMethodIcon method={contactOption.method} />}
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
