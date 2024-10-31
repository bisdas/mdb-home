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
                    width="2.4em"
                    height="2.4em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--light-theme-instagram-color)'
                            : 'var(--dark-theme-instagram-color)'
                    }
                />
            );
        case SocialPlatform.YouTube:
            return (
                <IconYouTube
                    width="2.4em"
                    height="2.4em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--light-theme-youtube-color)'
                            : 'var(--dark-theme-youtube-color)'
                    }
                />
            );
        case SocialPlatform.Facebook:
            return (
                <IconFacebook
                    width="2.4em"
                    height="2.4em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--light-theme-facebook-color)'
                            : 'var(--dark-theme-facebook-color)'
                    }
                />
            );
        case SocialPlatform.Threads:
            return (
                <IconThreads
                    width="2.4em"
                    height="2.4em"
                    color={
                        experience.theme === Theme.LightTheme
                            ? 'var(--light-theme-threads-color)'
                            : 'var(--dark-theme-threads-color)'
                    }
                />
            );
        default:
            return null;
    }
};
