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
    SharedTd,
    SharedWordGrid,
    SharedWordBox
} from '../styles/SharedStyles';

export const PronunciationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const WordGrid = SharedWordGrid;
export const WordBox = styled(SharedWordBox)`
    text-align: center;
    background: #edf2f7;
    border-radius: 10px;
    padding: 12px;
`;

export const DialogueContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    p { margin-bottom: 15px; line-height: 1.8; color: #4a5568; }
    strong { color: #1a202c; font-weight: 800; margin-right: 8px; }
`;
