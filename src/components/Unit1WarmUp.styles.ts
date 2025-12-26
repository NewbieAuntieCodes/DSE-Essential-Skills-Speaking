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

export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 15px 0;
    label {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        background: #fff;
        padding: 12px 20px;
        border-radius: 10px;
        border: 1px solid #edf2f7;
        transition: all 0.2s;
        &:hover { border-color: #cbd5e0; background: #f8fafc; }
    }
`;

export const FillInTheBlankExercise = styled.div`
    background: #fff;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #edf2f7;
    p { margin-bottom: 12px; line-height: 2; color: #2d3748; }
`;

export const Blank = styled.span`
    display: inline-block;
    width: 140px;
    border-bottom: 2px solid #3182ce;
    margin: 0 10px;
    height: 24px;
    vertical-align: bottom;
    background: #f8fafc;
`;
