/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect, useRef } from 'react';
import styles from './TimerWidget.module.css';

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(' ');

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
        <div className={styles.floatingContainer}>
            {expanded && (
                <div className={styles.panel}>
                    <div
                        className={cx(
                            styles.timeDisplay,
                            isRunning && styles.timeDisplayRunning,
                            time === 0 && mode === 'down' && styles.timeDisplayFinished
                        )}
                    >
                        {formatTime(time)}
                    </div>
                    
                    <div className={styles.presetGroup}>
                        {presets.map(p => (
                            <button
                                key={p.label}
                                className={cx(
                                    styles.presetButton,
                                    mode === p.mode && (mode === 'up' || selectedPreset === p.seconds) && styles.presetButtonActive
                                )}
                                onClick={() => handleSelectMode(p)}
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.controlGroup}>
                        <button
                            className={cx(styles.mainActionButton, isRunning && styles.mainActionButtonRunning)}
                            onClick={handleStartPause}
                        >
                            {isRunning ? '暂停' : '开始'}
                        </button>
                        <button className={styles.resetButton} onClick={handleReset}>
                            重置
                        </button>
                    </div>
                </div>
            )}
            
            <button
                className={cx(styles.toggleButton, expanded && styles.toggleButtonActive)}
                onClick={() => setExpanded(!expanded)} 
                aria-label="Toggle Timer"
            >
                {expanded ? '✕' : '⏱️'}
            </button>
        </div>
    );
};

export default TimerWidget;
