import { OuterWrapper, ContentWrapper, TitleText, SubtitleText, Content } from './Block.styled';

interface BlockProps {
    title?: string;
    subtitle?: string;
    padding?: boolean;
    children: React.ReactNode;
}

/**
 * Block component.
 * @param props props
 * @param props.title title of the block
 * @param props.subtitle subtitle of the block
 * @param props.padding indicates if padding applied
 * @param props.children children node of the block
 * @returns component JSX.
 */
export const Block = ({ title, subtitle, padding = false, children }: BlockProps) => {
    return (
        <OuterWrapper padding={padding}>
            <ContentWrapper>
                {title && <TitleText>{title}</TitleText>}
                {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
                <Content>{children}</Content>
            </ContentWrapper>
        </OuterWrapper>
    );
};
