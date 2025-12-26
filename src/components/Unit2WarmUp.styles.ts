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

    li { margin-bottom: 12px; line-height: 1.6; }
`;

export const CheckboxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin: 15px 0;
    
    label {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: 0.95em;
        color: #4a5568;
        padding: 8px 15px;
        background: #fff;
        border: 1px solid #edf2f7;
        border-radius: 8px;
        transition: all 0.2s;

        &:hover { background: #f8fafc; border-color: #cbd5e0; }
    }
`;

export const FillInTheBlankExercise = styled.div`
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    p { margin-bottom: 18px; line-height: 1.8; }
`;

export const Blank = styled.span`
    display: inline-block;
    width: 130px;
    border-bottom: 2px solid #cbd5e0;
    margin: 0 8px;
    height: 20px;
    vertical-align: bottom;
`;
