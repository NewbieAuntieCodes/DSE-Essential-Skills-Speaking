/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes, css } from 'styled-components';

export const TimerFloatingContainer = styled.div`
    position: fixed;
    bottom: 100px;
    right: 30px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const TimerPanel = styled.div`
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 18px;
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    animation: slideUp 0.3s ease-out;

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const TimeDisplay = styled.div<{ isRunning: boolean; isFinished: boolean; mode: 'up' | 'down' }>`
    font-size: 2.2em;
    font-weight: 800;
    color: ${props => props.isFinished && props.mode === 'down' ? '#e53e3e' : props.isRunning ? '#3182ce' : '#4a5568'};
    margin-bottom: 12px;
    font-variant-numeric: tabular-nums;
    letter-spacing: -1px;
`;

export const PresetGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 15px;
    width: 100%;
`;

export const PresetButton = styled.button<{ active: boolean }>`
    background: ${props => props.active ? 'linear-gradient(135deg, #38b2ac, #4299e1)' : '#f7fafc'};
    color: ${props => props.active ? 'white' : '#718096'};
    border: 1px solid ${props => props.active ? 'transparent' : '#e2e8f0'};
    border-radius: 10px;
    padding: 8px 2px;
    font-size: 0.85em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: ${props => props.active ? '' : '#edf2f7'};
        transform: translateY(-1px);
    }
`;

export const ControlGroup = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;

export const MainActionButton = styled.button<{ isRunning: boolean }>`
    flex: 2;
    background: ${props => props.isRunning ? '#fc8181' : '#48bb78'};
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
    box-shadow: 0 4px 12px ${props => props.isRunning ? 'rgba(252, 129, 129, 0.3)' : 'rgba(72, 187, 120, 0.3)'};
    transition: all 0.2s;

    &:hover {
        opacity: 0.9;
        transform: scale(1.02);
    }
`;

export const ResetButton = styled.button`
    flex: 1;
    background: #edf2f7;
    color: #4a5568;
    border: none;
    border-radius: 12px;
    padding: 12px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: #e2e8f0;
    }
`;

export const ToggleButton = styled.button<{ active: boolean }>`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${props => props.active ? '#4a5568' : 'linear-gradient(135deg, #38b2ac, #4299e1)'};
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.1) rotate(${props => props.active ? '90deg' : '0deg'});
    }
`;
