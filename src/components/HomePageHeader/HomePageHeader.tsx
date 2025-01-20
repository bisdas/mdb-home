import { Theme } from 'src/constants/experienceConstants';
import { DelishBowlBranding } from 'src/components/shared/DelishBowlBranding/DelishBowlBranding';
import {
    OuterWrapper,
    SiteBrandingWrapper,
    SocialLinksBarWrapper,
    SocialLinksBarInnerWrapper,
    ThemeSwitcher,
    Label,
} from './HomePageHeader.styled';
import { ToggleSwitch } from 'src/components/shared/ToggleSwitch/ToggleSwitch';
import { useExperienceStore } from 'src/stores/experienceStore';
import { SocialLinksBar } from 'src/components/SocialLinksBar/SocialLinksBar';

/**
 * HomePageHeader component.
 * @returns The rendered component.
 */
export const HomePageHeader = () => {
    const { experience, setTheme } = useExperienceStore();
    const isLightTheme = experience.theme === Theme.LightTheme;

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
            <ThemeSwitcher>
                <Label>Lights</Label>
                <ToggleSwitch
                    isOn={isLightTheme}
                    onChange={(isOn) => {
                        setTheme(isOn ? Theme.LightTheme : Theme.DarkTheme);
                    }}
                />
            </ThemeSwitcher>
        </OuterWrapper>
    );
};
