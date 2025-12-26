/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';
import { 
    SharedContainer, 
    SharedSection, 
    SharedBackButton, 
    SharedExerciseBox, 
    SharedInstruction, 
    SharedTable,
    SharedTh,
    SharedTd
} from '../styles/SharedStyles';

export const PronunciationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;

export const ExampleBox = styled.div`
    background: #f8fafc;
    border-left: 6px solid #3182ce;
    padding: 25px;
    margin: 25px 0;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);

    p { margin: 0 0 12px 0; line-height: 1.8; color: #2d3748; font-size: 1.05em; &:last-child { margin-bottom: 0; } }
    strong { text-decoration: underline; font-weight: 800; color: #2c5282; background: #ebf8ff; padding: 0 4px; }
`;

export const Arrow = styled.span`
    font-weight: 800;
    color: #3182ce;
    margin: 0 8px;
    font-size: 1.2em;
`;

export const DialogueContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.04);
    
    p { margin-bottom: 15px; line-height: 1.8; color: #4a5568; }
    strong { color: #1a202c; font-weight: 700; margin-right: 8px; }
`;
