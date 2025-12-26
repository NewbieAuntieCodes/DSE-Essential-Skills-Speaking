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

export const CommunicationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
    margin: 25px 0;
`;

export const OptionCard = styled.div`
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);

    h4 { font-size: 1.2em; color: #2d3748; margin-bottom: 12px; font-weight: 700; }
    p { font-size: 0.95em; color: #718096; line-height: 1.6; }
`;

export const AthleteCard = styled(OptionCard)`
    text-align: center;
    background: #f8fafc;
    border-color: #edf2f7;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
`;

export const DialogueBubble = styled.div`
    background-color: #f0f9ff;
    border: 1px solid #bee3f8;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    
    p { margin: 0; line-height: 1.6; }
    strong { color: #2c5282; }
`;

export const FillInTheBlank = styled.span`
    display: inline-block;
    border-bottom: 2px solid #3182ce;
    padding: 0 8px;
    min-width: 100px;
    text-align: center;
    font-weight: 700;
    color: #2c5282;
`;

export const DialogueCompletionExercise = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: #f8fafc;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
`;

export const DialogueLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 25px;
    padding-bottom: 20px;
    border-bottom: 1px dashed #cbd5e0;

    &:last-child { border-bottom: none; padding-bottom: 0; }
    
    p { margin: 0; flex: 2; color: #2d3748; line-height: 1.7; }

    div {
        flex: 1;
        background: #fff;
        padding: 15px;
        border-radius: 10px;
        font-size: 0.88em;
        border: 1px solid #edf2f7;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);

        p { margin-bottom: 8px !important; color: #4a5568; line-height: 1.4; }
        strong { color: #1a202c; }
    }

    @media (max-width: 768px) { flex-direction: column; }
`;
