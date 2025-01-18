import { OuterWrapper, PlatformIconBox, Anchor, ContentWrapper } from './SocialProfileCard.styled';
import { SocialPlatform } from 'src/constants/commonConstants';
import { SocialPlatformIcon } from 'src/components/SocialPlatformIcon/SocialPlatformIcon';

interface SocialProfileCardProps {
    platform: SocialPlatform;
    link: string;
}

/**
 * SocialProfileCard component
 * @param props - props
 * @param props.platform - The platform of the profile.
 * @param props.link - The link to the profile.
 * @returns The rendered component.
 */
export const SocialProfileCard = (props: SocialProfileCardProps) => {
    const { platform, link } = props;

    return (
        <OuterWrapper>
            <Anchor href={link} target="_blank">
                <ContentWrapper>
                    <PlatformIconBox>
                        <SocialPlatformIcon platform={platform} />
                    </PlatformIconBox>
                </ContentWrapper>
            </Anchor>
        </OuterWrapper>
    );
};
