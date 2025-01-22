import { DelishBowlBranding } from 'src/components/shared/DelishBowlBranding/DelishBowlBranding';
import {
    OuterWrapper,
    SiteBrandingWrapper,
    SocialLinksBarWrapper,
    SocialLinksBarInnerWrapper,
} from './HomePageHeader.styled';

import { useExperienceStore } from 'src/stores/experienceStore';
import { SocialLinksBar } from 'src/components/SocialLinksBar/SocialLinksBar';

/**
 * HomePageHeader component.
 * @returns The rendered component.
 */
export const HomePageHeader = () => {
    const { experience } = useExperienceStore();

    return (
        <OuterWrapper>
            <SiteBrandingWrapper>
                <DelishBowlBranding height="9rem" width="12rem" theme={experience.theme} />
            </SiteBrandingWrapper>
            <SocialLinksBarWrapper>
                <SocialLinksBarInnerWrapper>
                    <SocialLinksBar />
                </SocialLinksBarInnerWrapper>
            </SocialLinksBarWrapper>
        </OuterWrapper>
    );
};
