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
    background: #fffdf5;
    border-left: 6px solid #ecc94b;
    padding: 25px;
    margin: 25px 0;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);

    p { margin: 0 0 15px 0; line-height: 1.8; color: #2d3748; font-size: 1.1em; &:last-child { margin-bottom: 0; } }
    .connected-speech { text-decoration: underline; text-decoration-color: #ecc94b; text-decoration-thickness: 3px; font-weight: 800; color: #1a202c; background: #fffcf0; padding: 0 4px; }
`;

export const DialogueContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 35px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
    p { margin-bottom: 20px; line-height: 1.8; color: #4a5568; }
    strong { color: #1a202c; font-weight: 800; margin-right: 10px; }
`;
