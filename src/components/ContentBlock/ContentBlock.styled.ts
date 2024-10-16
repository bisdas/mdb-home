import styled from 'styled-components/macro';

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    padding: ${(props) => (props.padding ? 'var(--content-block-layout-padding)' : '0')};
    pointer-events: none;
`;

export const TitleText = styled.div`
    font-family: var(--content-block-title-font-family);
    font-size: var(--content-block-title-font-size);
`;

export const Content = styled.div`
    font-family: var(--default-font-family);
    font-size: var(--default-font-size);
`;
