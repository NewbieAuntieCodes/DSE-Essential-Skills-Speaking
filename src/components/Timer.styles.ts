/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled, { keyframes, css } from 'styled-components';

export const TimerWrapper = styled.div`
    position: fixed;
    bottom: 100px; /* Above the vocabulary book button */
    right: 30px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
`;

export const FloatingTimerButton = styled.button<{ active: boolean }>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${props => props.active ? '#2d3748' : 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)'};
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }
`;

const slideIn = keyframes`
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const TimerPanel = styled.div`
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 240px;
    animation: ${slideIn} 0.3s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Display = styled.div<{ warning: boolean }>`
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Courier New', Courier, monospace;
    color: ${props => props.warning ? '#e53e3e' : '#2d3748'};
    margin-bottom: 15px;
    transition: color 0.3s ease;
`;

export const Controls = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const ControlButton = styled.button<{ variant?: 'start' | 'stop' | 'reset' }>`
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    
    ${props => props.variant === 'start' && css`
        background: #48bb78;
        color: white;
        &:hover { background: #38a169; }
    `}

    ${props => props.variant === 'stop' && css`
        background: #f6ad55;
        color: white;
        &:hover { background: #ed8936; }
    `}

    ${props => props.variant === 'reset' && css`
        background: #edf2f7;
        color: #4a5568;
        &:hover { background: #e2e8f0; }
    `}
`;

export const Presets = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5px;
`;

export const PresetButton = styled.button`
    flex: 1;
    padding: 6px 4px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    background: white;
    font-size: 0.75rem;
    color: #718096;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: #f7fafc;
        border-color: #cbd5e0;
        color: #4a5568;
    }
`;