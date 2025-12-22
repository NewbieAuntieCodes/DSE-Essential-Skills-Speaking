/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import {
    TimerFloatingContainer,
    TimerPanel,
    TimeDisplay,
    PresetGroup,
    PresetButton,
    ControlGroup,
    MainActionButton,
    ResetButton,
    ToggleButton
} from './TimerWidget.styles';

const TimerWidget: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [time, setTime] = useState(600); // 秒数
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState<'up' | 'down'>('down');
    const [selectedPreset, setSelectedPreset] = useState(600);
    
    const timerRef = useRef<number | null>(null);

    const presets = [
        { label: '1m', seconds: 60, mode: 'down' as const },
        { label: '8m', seconds: 480, mode: 'down' as const },
        { label: '10m', seconds: 600, mode: 'down' as const },
        { label: '顺计', seconds: 0, mode: 'up' as const }
    ];

    useEffect(() => {
        if (isRunning) {
            timerRef.current = window.setInterval(() => {
                setTime(prev => {
                    if (mode === 'down') {
                        if (prev <= 1) {
                            setIsRunning(false);
                            if (timerRef.current) clearInterval(timerRef.current);
                            return 0;
                        }
                        return prev - 1;
                    } else {
                        return prev + 1;
                    }
                });
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isRunning, mode]);

    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSelectMode = (preset: typeof presets[0]) => {
        setIsRunning(false);
        setMode(preset.mode);
        setTime(preset.seconds);
        setSelectedPreset(preset.seconds);
    };

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        if (mode === 'up') {
            setTime(0);
        } else {
            setTime(selectedPreset);
        }
    };

    return (
        <TimerFloatingContainer>
            {expanded && (
                <TimerPanel>
                    <TimeDisplay 
                        isRunning={isRunning} 
                        isFinished={time === 0}
                        mode={mode}
                    >
                        {formatTime(time)}
                    </TimeDisplay>
                    
                    <PresetGroup>
                        {presets.map(p => (
                            <PresetButton 
                                key={p.label}
                                active={(mode === p.mode && (mode === 'up' || selectedPreset === p.seconds))}
                                onClick={() => handleSelectMode(p)}
                            >
                                {p.label}
                            </PresetButton>
                        ))}
                    </PresetGroup>

                    <ControlGroup>
                        <MainActionButton isRunning={isRunning} onClick={handleStartPause}>
                            {isRunning ? '暂停' : '开始'}
                        </MainActionButton>
                        <ResetButton onClick={handleReset}>重置</ResetButton>
                    </ControlGroup>
                </TimerPanel>
            )}
            
            <ToggleButton 
                active={expanded} 
                onClick={() => setExpanded(!expanded)} 
                aria-label="Toggle Timer"
            >
                {expanded ? '✕' : '⏱️'}
            </ToggleButton>
        </TimerFloatingContainer>
    );
};

export default TimerWidget;
