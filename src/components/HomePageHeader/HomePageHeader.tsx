import { Theme } from 'src/constants/experienceConstants';
import { DelishBowlBranding } from 'src/components/shared/DelishBowlBranding/DelishBowlBranding';
import { OuterWrapper, Content, SiteBranding, ThemeSwitcher, Label } from './HomePageHeader.styled';
import { ToggleSwitch } from 'src/components/shared/ToggleSwitch/ToggleSwitch';
import { useExperienceStore } from 'src/stores/experienceStore';

/**
 * HomePageHeader component.
 * @returns The rendered component.
 */
export const HomePageHeader = () => {
    const { experience, setTheme } = useExperienceStore();
    const isLightTheme = experience.theme === Theme.LightTheme;

    return (
        <OuterWrapper>
            <Content>
                <SiteBranding>
                    <DelishBowlBranding height="8rem" width="11rem" theme={experience.theme} />
                </SiteBranding>
            </Content>
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
