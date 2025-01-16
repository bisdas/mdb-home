import styled from 'styled-components/macro';

export const OuterWrapper = styled.div``;

export const ProductLineCardWrapper = styled.div<{ border: boolean; borderColor: string }>`
    margin-bottom: 1.6rem;
    padding-bottom: 1.4rem;
    border-bottom: ${({ border }) => (border ? '1px solid' : 'none')};
    border-color: ${({ borderColor }) => borderColor};
`;
