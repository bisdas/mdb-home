import { SocialProfile } from 'src/constants/schema';
import { socialProfiles } from 'src/mocks/apiResponseMock';
import { ContentWrapper, OuterWrapper, SocialProfileItem } from './SocialLinksBar.styled';
import { SocialProfileCard } from 'src/components/SocialProfileCard/SocialProfileCard';

/**
 * OurPages component.
 * @returns The rendered component.
 */
export const SocialLinksBar = () => {
    return (
        <OuterWrapper>
            <ContentWrapper>
                {socialProfiles.map((profile: SocialProfile) => {
                    return (
                        <SocialProfileItem key={profile.platform}>
                            <SocialProfileCard platform={profile.platform} link={profile.link} />
                        </SocialProfileItem>
                    );
                })}
            </ContentWrapper>
        </OuterWrapper>
    );
};
