import { OuterWrapper, MethodIconBox, MethodDetails, Method, Address, ContentWrapper } from './ContactCard.styled';
import { ContactMethod } from 'src/constants/commonConstants';
import { ContactMethodIcon } from 'src/components/ContactMethodIcon/ContactMethodIcon';

interface ContactCardProps {
    method: ContactMethod;
    address: string;
    addressText: string;
}

/**
 * ContactCard component
 * @param props - props
 * @param props.method - The contact method (e.g., Email, Phone).
 * @param props.address - The address or contact information.
 * @param props.addressText - The text to display for the address.
 * @returns The rendered component.
 */
export const ContactCard = ({ method, addressText }: ContactCardProps) => {
    // const { experience } = useExperienceStore();

    // const anchorHref = useMemo(() => {
    //     if (method === ContactMethod.Email) {
    //         return `mailto:${address}`;
    //     }

    //     if (method === ContactMethod.Phone) {
    //         return `tel:${address}`;
    //     }

    //     return address;
    // }, [method, address]);

    return (
        <OuterWrapper>
            <ContentWrapper>
                <MethodIconBox>
                    <ContactMethodIcon method={method} />
                </MethodIconBox>
                <MethodDetails>
                    <Method>{method}</Method>
                    <Address>{addressText}</Address>
                </MethodDetails>
                {/* <NavigateIconBox>
                        <ArrowNextRightIcon
                            width="1em"
                            height="1em"
                            color={
                                experience.theme === Theme.LightTheme
                                    ? 'var(--default-light-theme-icon-color)'
                                    : 'var(--default-dark-theme-icon-color)'
                            }
                        />
                    </NavigateIconBox> */}
            </ContentWrapper>
        </OuterWrapper>
    );
};
