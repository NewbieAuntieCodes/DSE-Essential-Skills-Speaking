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

export const SoundDiagramContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin: 30px 0;
    padding: 25px;
    background-color: #f8fafc;
    border-radius: 16px;
    border: 1px solid #edf2f7;
`;

export const SoundDiagram = styled.div`
    text-align: left;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);

    p { margin: 0; font-size: 0.95em; color: #4a5568; line-height: 1.6; }
    strong { color: #2d3748; display: block; margin-bottom: 8px; font-size: 1.1em; }
`;

export const EdEndingTable = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;

export const TongueTwisterList = styled.ol`
    list-style-type: decimal;
    padding-left: 30px;

    li { margin-bottom: 18px; color: #2d3748; line-height: 1.7; padding-left: 10px; font-weight: 500; font-family: 'Courier New', monospace; font-size: 1.1em; }
`;

export const Highlight = styled.span`
    background-color: #feebc8;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 700;
    color: #c05621;
    border-bottom: 1px solid #ed8936;
`;
