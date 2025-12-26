/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        padding: 20px 10px;
    }
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 50px;
    
    h1 {
        color: #1a202c;
        font-size: 3.5em;
        font-weight: 800;
        margin-bottom: 10px;
        letter-spacing: -1px;

        @media (max-width: 768px) {
            font-size: 2.4em;
        }
    }
    
    h2 {
        color: #718096;
        font-size: 1.6em;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 1.2em;
        }
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const Card = styled.div<{ disabled?: boolean }>`
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 30px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    border: 1px solid #edf2f7;

    ${props => !props.disabled && `
        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #4299e1;
        }
    `}

    h3 {
        margin-bottom: 15px;
        color: #2d3748;
        font-size: 1.4em;
        font-weight: 700;
    }

    p {
        color: #718096;
        font-size: 0.95em;
        line-height: 1.6;
    }
`;

export const BackButton = styled.button`
    background: #edf2f7;
    border: none;
    color: #4a5568;
    font-size: 0.95em;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 30px;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        background: #e2e8f0;
        color: #2d3748;
    }
`;
