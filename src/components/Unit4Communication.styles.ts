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
    SharedTd,
    SharedArticleBox
} from '../styles/SharedStyles';

export const CommunicationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const ArticleBox = SharedArticleBox;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

export const DialogueBubble = styled.div`
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);

    p { margin: 0; line-height: 1.6; color: #4a5568; }
`;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
    margin: 25px 0;
`;

export const OptionCard = styled.div`
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 25px;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);

    h4 { font-size: 1.2em; color: #1a202c; margin-bottom: 12px; font-weight: 800; border-bottom: 2px solid #f7fafc; padding-bottom: 8px; }
    p { font-size: 0.95em; color: #4a5568; line-height: 1.6; }
`;

export const DialogueCompletionExercise = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #fff;
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
`;

export const DialogueLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    padding-bottom: 25px;
    border-bottom: 1px dashed #cbd5e0;

    &:last-child { border-bottom: none; padding-bottom: 0; }
    
    .dialogue-text { flex: 2; padding: 20px; border-radius: 12px; background: #f8fafc; border: 1px solid #edf2f7; min-height: 60px; }
    .reason-box { flex: 1; background: #ebf8ff; padding: 15px; border-radius: 10px; font-size: 0.9em; border: 1px solid #bee3f8; p { margin-bottom: 8px !important; color: #2c5282; font-weight: 500; } strong { color: #2a4365; } }

    @media (max-width: 768px) { flex-direction: column; align-items: stretch; }
`;

export const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const ModelAnswerButton = styled.button`
    background: #38a169;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 14px 32px;
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    margin: 40px auto 0;
    display: block;
    box-shadow: 0 4px 14px rgba(56, 161, 105, 0.4);

    &:hover { background: #2f855a; transform: translateY(-2px); }
`;

export const ModelAnswerContainer = styled.div`
    background-color: #f0fff4;
    border: 2px solid #c6f6d5;
    border-radius: 16px;
    padding: 35px;
    margin-top: 30px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    
    h4 { color: #22543d; font-size: 1.4em; margin-top: 25px; margin-bottom: 15px; border-bottom: 2px solid #9ae6b4 !important; padding-bottom: 10px; font-weight: 800; &:first-child { margin-top: 0; } }
    h5 { color: #2f855a; font-size: 1.2em; margin-top: 20px; margin-bottom: 10px; font-weight: 700; }
    p { margin-bottom: 10px !important; color: #2d3748 !important; line-height: 1.7 !important; }
    strong { color: #1a202c; }
`;
