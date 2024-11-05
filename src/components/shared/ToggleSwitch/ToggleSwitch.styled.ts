import styled from 'styled-components/macro';

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 7rem;
    height: 2.4rem;
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
        height: 2rem;
        width: 2rem;
        left: 0.2rem;
        bottom: 0.2rem;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
        transform: ${(props) => (props.isOn ? 'translateX(4.6rem)' : 'translateX(0)')};
    }
`;

export const StateText = styled.span<{ isOn: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    font-weight: 800;
    color: ${(props) => (props.isOn ? 'white' : 'black')};
    pointer-events: none;
`;
