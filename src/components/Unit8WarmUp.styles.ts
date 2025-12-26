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
    SharedInstruction 
} from '../styles/SharedStyles';

export const WarmUpContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;

export const QuestionList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    li { margin-bottom: 12px; line-height: 1.7; }
`;

export const DebateBox = styled.div`
    background: #f1f5f9;
    border-left: 6px solid #4a5568;
    padding: 25px;
    margin: 25px 0;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    p { margin: 0; line-height: 1.7; color: #1a202c; font-weight: 600; font-size: 1.05em; }
`;
