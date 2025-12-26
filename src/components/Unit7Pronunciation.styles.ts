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

export const PronunciationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;

export const ExampleBox = styled.div`
    background: #f0fdf4;
    border-left: 6px solid #38a169;
    padding: 25px;
    margin: 25px 0;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);

    p { margin: 0 0 12px 0; line-height: 1.8; color: #1a202c; font-size: 1.1em; font-weight: 600; &:last-child { margin-bottom: 0; } }
    ul { list-style: none; padding-left: 10px; margin: 15px 0 0; }
    li { margin-bottom: 10px; color: #2d3748; }
    strong { color: #2f855a; font-weight: 800; background: #fff; padding: 0 4px; border-radius: 4px; border: 1px solid #c6f6d5; }
`;

export const SentenceList = styled.ol`
    list-style-type: decimal;
    padding-left: 30px;
    color: #4a5568;
    li { margin-bottom: 18px; padding-left: 10px; line-height: 1.8; font-size: 1.05em; }
    strong { color: #2b6cb0; font-weight: 800; border-bottom: 2px solid #bee3f8; }
`;
