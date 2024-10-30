import { SocialProfile } from 'src/constants/schema';
import { socialProfiles } from 'src/mocks/apiResponseMock';
import { OuterWrapper, PageWrapper } from './OurPages.styled';
import { SocialProfileCard } from 'src/components/SocialProfileCard/SocialProfileCard';

/**
 * OurPages component.
 * @returns The rendered component.
 */
export const OurPages = () => {
    return (
        <OuterWrapper>
            {socialProfiles.map((profile: SocialProfile) => {
                return (
                    <PageWrapper key={profile.platform}>
                        <SocialProfileCard
                            name={profile.name}
                            platform={profile.platform}
                            followers={profile.followers}
                            link={profile.link}
                        />
                    </PageWrapper>
                );
            })}
        </OuterWrapper>
    );
};
