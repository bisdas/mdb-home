import styled from 'styled-components/macro';

export const OuterWrapper = styled.div<{ padding?: boolean }>`
    padding-left: ${(props) => (props.padding ? '1.5rem' : '0')};
    padding-right: ${(props) => (props.padding ? '1.5rem' : '0')};
    box-sizing: border-box;
    padding-top: 2.4rem;
    padding-bottom: 2.8rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.4;
`;
