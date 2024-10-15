import { OuterWrapper, TitleText, Content } from './ContentBlock.styled';

interface ContentBlockProps {
    title: string;
    padding?: boolean;
    children: React.ReactNode;
}

/**
 * ContentBlock component.
 * @param props props
 * @param props.title title of the block
 * @param props.padding indicates if padding applied
 * @param props.children children node of the block
 * @returns component JSX.
 */
export const ContentBlock = ({ title, padding = false, children }: ContentBlockProps) => {
    return (
        <OuterWrapper padding={padding}>
            <TitleText>{title}</TitleText>
            <Content>{children}</Content>
        </OuterWrapper>
    );
};
