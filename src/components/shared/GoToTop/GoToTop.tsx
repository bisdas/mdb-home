import { IconArrowUp } from 'src/components/shared/iconComponents/IconArrowUp/IconArrowUp';
import { OuterWrapper, Content, IconWrapper } from './GoToTop.styled';

export const GoToTop = () => {
    return (
        <OuterWrapper>
            <Content
                onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }}
            >
                <IconWrapper>
                    <IconArrowUp width="2.4rem" height="2.4rem" />
                </IconWrapper>
                Go to top
            </Content>
        </OuterWrapper>
    );
};
