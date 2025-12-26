/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';
import { 
    SharedContainer, 
    SharedSection, 
    SharedBackButton, 
    SharedTable, 
    SharedTh, 
    SharedTd, 
    SharedExerciseBox, 
    SharedInstruction, 
    SharedWordGrid, 
    SharedWordBox 
} from '../styles/SharedStyles';

export const PronunciationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;

export const SubSection = styled.div`
    margin-top: 25px;
    padding: 20px;
    background: #f8fafc;
    border-left: 5px solid #4299e1;
    border-radius: 8px;
`;
