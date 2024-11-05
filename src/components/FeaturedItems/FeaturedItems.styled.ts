import styled from 'styled-components/macro';

export const OuterWrapper = styled.div``;

export const Content = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */

    &::-webkit-scrollbar {
        display: none; /* For Chrome, Safari, and Opera */
    }
`;

export const Item = styled.div<{ isLastItem: boolean }>`
    display: inline-block;
    margin-right: ${({ isLastItem }) => (isLastItem ? '0' : '3rem')};
`;
