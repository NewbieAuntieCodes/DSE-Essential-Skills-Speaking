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
    SharedWordBox 
} from '../styles/SharedStyles';

export const Unit2PronunciationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;

export const SoundDiagramContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 25px;
    margin: 30px 0;
`;

export const SoundDiagram = styled.div`
    text-align: center;
    max-width: 160px;
    background: #f8fafc;
    padding: 15px;
    border-radius: 12px;
    border: 1px solid #edf2f7;

    p { margin-top: 10px; font-size: 0.9em; color: #2d3748; font-weight: 600; }
`;

export const WordList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
`;

export const WordPair = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 10px 0;
`;

export const WordBox = styled(SharedWordBox)`
    text-align: center;
    border-radius: 10px;
    background: #edf2f7;
`;

export const QuoteList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;

    li { margin-bottom: 18px; color: #2d3748; line-height: 1.7; padding-left: 10px; font-style: italic; }
`;

export const PausedText = styled.p`
    font-size: 1.15em;
    line-height: 2;
    background: #f1f5f9;
    padding: 20px;
    border-radius: 12px;
    color: #1a202c;
    font-family: 'Georgia', serif;
`;
