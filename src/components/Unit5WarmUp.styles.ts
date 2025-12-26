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
    SharedWordGrid, 
    SharedWordBox 
} from '../styles/SharedStyles';

export const WarmUpContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;

export const QuestionList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    li { margin-bottom: 12px; line-height: 1.7; }
`;

export const FillInTheBlankExercise = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #edf2f7;
    ol { list-style-type: decimal; padding-left: 20px; }
    li { margin-bottom: 20px; display: flex; align-items: baseline; flex-wrap: wrap; line-height: 1.8; }
`;

export const Blank = styled.span`
    display: inline-block;
    min-width: 140px;
    border-bottom: 2px solid #cbd5e0;
    margin: 0 10px;
    text-align: center;
    font-weight: 700;
    color: #2b6cb0;
    height: 24px;
`;
