import styled from 'styled-components/macro';

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 6.4rem;
    height: 2.2rem;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Slider = styled.span<{ isOn: boolean }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => (props.isOn ? '#4caf50' : '#fb2d2d')};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: '';
        height: 1.9rem;
        width: 1.9rem;
        left: 0.2rem;
        bottom: 0.15rem;
        background-color: ${(props) => (props.isOn ? '#ffffff' : '#000000')};
        transition: 0.2s;
        border-radius: 50%;
        transform: ${(props) => (props.isOn ? 'translateX(4.15rem)' : 'translateX(0)')};
    }
`;

export const StateText = styled.span<{ isOn: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8rem;
    font-weight: 800;
    color: ${(props) => (props.isOn ? '#ffffff' : '#000000')};
    pointer-events: none;
`;
