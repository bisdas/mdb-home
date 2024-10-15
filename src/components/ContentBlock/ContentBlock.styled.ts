import { DefaultUISetting } from 'src/constants/userInterfaceConstants';
import styled from 'styled-components/macro';

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    padding: ${(props) => (props.padding ? DefaultUISetting.ContentBlock.Layout.Padding : '0')};
`;

export const TitleText = styled.div`
    font-family: Montserrat-Bold, sans-serif;
    font-size: ${DefaultUISetting.ContentBlock.Title.FontSize};
`;

export const Content = styled.div`
    font-family: Montserrat-Regular, sans-serif;
    font-size: ${DefaultUISetting.ContentBlock.Content.FontSize};
`;
