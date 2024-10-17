import React from 'react';
import {
    OuterWrapper,
    MethodIconBox,
    MethodDetails,
    Method,
    Address,
    NavigateIconBox,
} from './ContactCard.styled';
import { ContactMethod } from 'src/constants/commonConstants';
import RightArrowIcon from 'src/assets/icons/arrow-next-right-icon.svg';

interface ContactCardProps {
    icon: React.ReactNode;
    method: ContactMethod;
    address: string;
    addressText: string;
}

/**
 * ContactCard component
 * @param props - props
 * @param props.icon - The icon to display for the contact method.
 * @param props.method - The contact method (e.g., Email, Phone).
 * @param props.address - The address or contact information.
 * @param props.addressText - The text to display for the address.
 * @returns The rendered component.
 */
export const ContactCard = ({ icon, method, address, addressText }: ContactCardProps) => {
    let addressNode = null;

    /* based on the method, create the address node */
    if (method === ContactMethod.Email) {
        addressNode = <a href={`mailto:${address}`}>{addressText}</a>;
    }

    return (
        <OuterWrapper>
            <MethodIconBox>{icon}</MethodIconBox>
            <MethodDetails>
                <Method>{method}</Method>
                <Address>{addressNode}</Address>
            </MethodDetails>
            <NavigateIconBox>
                {/* @ts-expect-error width prop is not recognized */}
                <RightArrowIcon width="1em" height="1em" style={{ opacity: '40%' }} />
            </NavigateIconBox>
        </OuterWrapper>
    );
};
