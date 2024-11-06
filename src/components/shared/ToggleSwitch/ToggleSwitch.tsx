import { useEffect, useState } from 'react';
import { SwitchContainer, SwitchLabel, SwitchInput, Slider, StateText } from './ToggleSwitch.styled';

interface ToggleSwitchProps {
    isOn: boolean;
    onChange: (isOn: boolean) => void;
}

/**
 * ToggleSwitch component.
 * @param props - props.
 * @returns component JSX.
 */
export const ToggleSwitch: React.FC<ToggleSwitchProps> = (props: ToggleSwitchProps) => {
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const { onChange, isOn } = props;

    /**
     * Handle toggle.
     */
    const handleToggle = () => {
        setIsSwitchOn((prevIsSwitchOn) => {
            const newIsSwitchOn = !prevIsSwitchOn;
            onChange(newIsSwitchOn);
            return newIsSwitchOn;
        });
    };

    useEffect(() => {
        setIsSwitchOn(isOn);
    }, [isOn]);

    return (
        <SwitchContainer>
            <SwitchLabel>
                <SwitchInput type="checkbox" checked={isSwitchOn} onChange={handleToggle} />
                <Slider isOn={isSwitchOn}>
                    <StateText isOn={isSwitchOn}>{isSwitchOn ? 'ON' : 'OFF'}</StateText>
                </Slider>
            </SwitchLabel>
        </SwitchContainer>
    );
};
