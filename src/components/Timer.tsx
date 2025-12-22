/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import {
    TimerWrapper,
    FloatingTimerButton,
    TimerPanel,
    Display,
    Controls,
    ControlButton,
    Presets,
    PresetButton
} from './Timer.styles';

const Timer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState(600); // Current seconds
    const [isActive, setIsActive] = useState(false);
    const [isCountUp, setIsCountUp] = useState(false); // Mode: true for Stopwatch, false for Countdown
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const toggleTimer = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isActive) {
            timerRef.current = setInterval(() => {
                setTime(prev => {
                    if (isCountUp) {
                        return prev + 1;
                    } else {
                        if (prev <= 0) {
                            setIsActive(false);
                            return 0;
                        }
                        return prev - 1;
                    }
                });
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, isCountUp]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartStop = () => setIsActive(!isActive);

    const handleReset = () => {
        setIsActive(false);
        // Reset based on mode
        setTime(isCountUp ? 0 : 600);
    };

    const setPreset = (seconds: number, countUp: boolean = false) => {
        setIsActive(false);
        setIsCountUp(countUp);
        setTime(seconds);
    };

    return (
        <TimerWrapper>
            {isOpen && (
                <TimerPanel>
                    <div style={{ fontSize: '0.75rem', color: '#718096', marginBottom: '5px', fontWeight: 'bold' }}>
                        {isCountUp ? '顺着计时 (Stopwatch)' : '倒计时 (Countdown)'}
                    </div>
                    <Display warning={!isCountUp && time <= 10 && time > 0}>
                        {formatTime(time)}
                    </Display>
                    <Controls>
                        <ControlButton 
                            variant={isActive ? 'stop' : 'start'} 
                            onClick={handleStartStop}
                        >
                            {isActive ? '暂停' : '开始'}
                        </ControlButton>
                        <ControlButton variant="reset" onClick={handleReset}>
                            重置
                        </ControlButton>
                    </Controls>
                    <Presets style={{ flexWrap: 'wrap', gap: '8px' }}>
                        <PresetButton onClick={() => setPreset(600, false)}>10m (Prep)</PresetButton>
                        <PresetButton onClick={() => setPreset(480, false)}>8m (Group)</PresetButton>
                        <PresetButton onClick={() => setPreset(60, false)}>1m (Indiv)</PresetButton>
                        <PresetButton 
                            style={{ background: isCountUp ? '#ebf8ff' : '#fff', borderColor: isCountUp ? '#4299e1' : '#e2e8f0' }}
                            onClick={() => setPreset(0, true)}
                        >
                            顺着计时 ⏱️
                        </PresetButton>
                    </Presets>
                </TimerPanel>
            )}
            <FloatingTimerButton active={isOpen} onClick={toggleTimer} aria-label="Toggle timer">
                {isOpen ? '✕' : '⏱️'}
            </FloatingTimerButton>
        </TimerWrapper>
    );
};

export default Timer;