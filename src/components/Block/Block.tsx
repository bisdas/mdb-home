import { OuterWrapper, TitleText, Content } from './Block.styled';

interface BlockProps {
    title: string;
    padding?: boolean;
    children: React.ReactNode;
}

/**
 * Block component.
 * @param props props
 * @param props.title title of the block
 * @param props.padding indicates if padding applied
 * @param props.children children node of the block
 * @returns component JSX.
 */
export const Block = ({ title, padding = false, children }: BlockProps) => {
    return (
        <OuterWrapper padding={padding}>
            <TitleText>{title}</TitleText>
            <Content>{children}</Content>
        </OuterWrapper>
    );
};
