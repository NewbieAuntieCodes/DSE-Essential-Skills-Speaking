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
    SharedArticleBox,
    SharedDialogueBubble
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
export const DialogueBubble = SharedDialogueBubble;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const StrategyList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

export const StrategyItem = styled.div`
    background: #f8fafc;
    border-left: 6px solid #4299e1;
    padding: 25px;
    border-radius: 4px 12px 12px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    h4 { color: #2c5282; margin-bottom: 12px; font-size: 1.15em; font-weight: 800; }
    p { font-style: italic; color: #4a5568; margin: 0; line-height: 1.6; }
`;

export const DialogueCompletionExercise = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    border-radius: 20px;
    padding: 45px 35px 30px;
    margin: 35px 0;
    background-image: linear-gradient(#f1f5f9 1px, transparent 1px);
    background-size: 100% 2.8em;
    box-shadow: 0 10px 20px rgba(0,0,0,0.04);
    position: relative;
    &::before { content: ''; position: absolute; top: 18px; left: 0; right: 0; height: 12px; background: radial-gradient(circle at 10% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 20% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 30% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 40% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 50% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 60% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 70% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 80% 6px, #cbd5e0 4px, transparent 5px), radial-gradient(circle at 90% 6px, #cbd5e0 4px, transparent 5px); background-repeat: no-repeat; }
`;

export const DialogueLine = styled.div`
    display: flex;
    align-items: flex-start;
    min-height: 8.4em;
    gap: 30px;
    position: relative;
    @media (max-width: 768px) { flex-direction: column; min-height: auto; margin-bottom: 25px; }
`;

export const SpeakerLabel = styled.strong`
    font-size: 1.3em;
    color: #1a202c;
    line-height: 2.15em;
    width: 35px;
`;

export const DialogueContent = styled.div` flex: 1; display: flex; flex-direction: column; padding-top: 0.5em; `;
export const DialogueText = styled.div` flex-grow: 1; min-height: 5.6em; color: #2d3748; line-height: 2.8em; font-size: 1.05em; `;

export const DialogueHint = styled.div`
    background-color: #fffdf5;
    border: 1px dashed #ecc94b;
    border-radius: 8px;
    padding: 8px 15px;
    font-size: 0.9em;
    color: #975a16;
    font-weight: 600;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 240px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.03);
     @media (max-width: 768px) { position: static; transform: none; margin-left: 2em; margin-top: 10px; width: auto; }
`;

export const RolePlayDialogue = styled.div`
    background: #f8fafc;
    border: 1px solid #edf2f7;
    padding: 30px;
    border-radius: 16px;
    p { margin-bottom: 18px; line-height: 1.7; color: #4a5568; }
    strong { color: #1a202c; font-weight: 800; }
`;

export const ConjunctionBox = styled.span`
    background: #2d3748;
    color: #fff;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 700;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.9em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;
