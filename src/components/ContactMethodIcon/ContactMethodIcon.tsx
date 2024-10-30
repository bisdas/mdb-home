import { useExperienceStore } from 'src/stores/experienceStore';
import { IconEmail } from 'src/components/shared/IconEmail/IconEmail';
import { IconPhone } from 'src/components/shared/IconPhone/IconPhone';
import { ContactMethod } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';

interface ContactMethodIconProps {
    method: ContactMethod;
}

/**
 * Get the icon for the contact method.
 * @param props - The props.
 * @returns The icon for the contact method.
 */
export const ContactMethodIcon = (props: ContactMethodIconProps) => {
    const { method } = props;
    const { experience } = useExperienceStore();

    switch (method) {
        case ContactMethod.Email:
            return (
                <IconEmail
                    width="1.8em"
                    height="1.8em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--default-light-theme-icon-color)'
                            : 'var(--default-dark-theme-icon-color)'
                    }
                />
            );
        case ContactMethod.Phone:
            return (
                <IconPhone
                    width="1.8em"
                    height="1.8em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--default-light-theme-icon-color)'
                            : 'var(--default-dark-theme-icon-color)'
                    }
                />
            );
        default:
            return null;
    }
};
