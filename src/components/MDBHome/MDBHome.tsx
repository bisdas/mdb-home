import { ContentBlock } from 'src/components/ContentBlock/ContentBlock';
import { OuterWrapper } from './MDBHome.styled';

/**
 * MDBHome component.
 * @returns component JSX.
 */
export const MDBHome = () => {
    return (
        <OuterWrapper>
            <ContentBlock title="Contact us" padding>
                <p>Content us block</p>
            </ContentBlock>
        </OuterWrapper>
    );
};
