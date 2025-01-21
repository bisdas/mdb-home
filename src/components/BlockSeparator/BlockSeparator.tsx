import { useExperienceStore } from 'src/stores/experienceStore';
import { IconChevronDown } from 'src/components/shared/IconChevronDown/IconChevronDown';
import { OuterWrapper, ContentWrapper } from './BlockSeparator.styled';
import { Theme } from 'src/constants/experienceConstants';

/**
 * BlockSeparator component.
 * @returns component JSX.
 */
export const BlockSeparator = () => {
    const { experience } = useExperienceStore();
    const iconColor =
        experience.theme === Theme.LightTheme
            ? 'var(--theme-light-icon-color-default)'
            : 'var(--theme-dark-icon-color-default)';

    return (
        <OuterWrapper>
            <ContentWrapper>
                <IconChevronDown height="1.6em" width="1.6em" color={iconColor} />
            </ContentWrapper>
        </OuterWrapper>
    );
};
