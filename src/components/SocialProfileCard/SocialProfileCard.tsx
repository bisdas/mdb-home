import {
    OuterWrapper,
    PlatformIconBox,
    PlatformDetails,
    Name,
    Followers,
    NavigateIconBox,
    Anchor,
    ContentWrapper,
} from './SocialProfileCard.styled';
import ArrowNextRightIcon from 'src/components/ArrowNextRightIcon';
import { SocialPlatform } from 'src/constants/commonConstants';
import { Theme } from 'src/constants/experienceConstants';
import { useExperienceStore } from 'src/stores/experienceStore';
import { SocialPlatformIcon } from 'src/components/SocialPlatformIcon/SocialPlatformIcon';

interface SocialProfileCardProps {
    name: string;
    platform: SocialPlatform;
    followers: string;
    link: string;
}

/**
 * SocialProfileCard component
 * @param props - props
 * @param props.name - The name of the profile.
 * @param props.platform - The platform of the profile.
 * @param props.followers - The number of followers of the profile.
 * @param props.link - The link to the profile.
 * @returns The rendered component.
 */
export const SocialProfileCard = (props: SocialProfileCardProps) => {
    const { name, platform, followers, link } = props;
    const { experience } = useExperienceStore();

    return (
        <OuterWrapper>
            <Anchor href={link} target="_blank">
                <ContentWrapper>
                    <PlatformIconBox>
                        <SocialPlatformIcon platform={platform} />
                    </PlatformIconBox>
                    <PlatformDetails>
                        <Name>{name}</Name>
                        <Followers>{followers}</Followers>
                    </PlatformDetails>
                    <NavigateIconBox>
                        <ArrowNextRightIcon
                            width="1em"
                            height="1em"
                            color={
                                experience.theme === Theme.LightTheme
                                    ? 'var(--default-light-theme-icon-color)'
                                    : 'var(--default-dark-theme-icon-color)'
                            }
                        />
                    </NavigateIconBox>
                </ContentWrapper>
            </Anchor>
        </OuterWrapper>
    );
};
