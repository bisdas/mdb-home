/* eslint-disable max-lines-per-function */
import { useExperienceStore } from 'src/stores/experienceStore';
import { SocialPlatform } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import { IconInstagram } from 'src/components/shared/IconInstagram/IconInstagram';
import { IconYouTube } from 'src/components/shared/IconYouTube/IconYouTube';
import { IconFacebook } from 'src/components/shared/IconFacebook/IconFacebook';
import { IconThreads } from 'src/components/shared/IconThreads/IconThreads';

interface SocialPlatformIconProps {
    platform: SocialPlatform;
}

/**
 * Get the icon for the contact method.
 * @param props - The props.
 * @returns The icon for the contact method.
 */
export const SocialPlatformIcon = (props: SocialPlatformIconProps) => {
    const { platform } = props;
    const { experience } = useExperienceStore();

    switch (platform) {
        case SocialPlatform.Instagram:
            return (
                <IconInstagram
                    width="2.6em"
                    height="2.6em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--theme-light-icon-color-default)'
                            : 'var(--theme-dark-icon-color-default)'
                    }
                />
            );
        case SocialPlatform.YouTube:
            return (
                <IconYouTube
                    width="2.6em"
                    height="2.6em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--theme-light-icon-color-default)'
                            : 'var(--theme-dark-icon-color-default)'
                    }
                />
            );
        case SocialPlatform.Facebook:
            return (
                <IconFacebook
                    width="2.3em"
                    height="2.3em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--theme-light-icon-color-default)'
                            : 'var(--theme-dark-icon-color-default)'
                    }
                />
            );
        case SocialPlatform.Threads:
            return (
                <IconThreads
                    width="1.95em"
                    height="1.95em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--theme-light-icon-color-default)'
                            : 'var(--theme-dark-icon-color-default)'
                    }
                />
            );
        default:
            return null;
    }
};
