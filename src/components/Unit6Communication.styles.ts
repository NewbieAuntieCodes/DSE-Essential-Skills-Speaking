
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

// Fix: Added missing DialogueGrid export
export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

// Fix: Added missing InstructionBox export
export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    @media (max-width: 768px) { grid-template-columns: 1fr; }
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
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    h4 { font-size: 1.2em; color: #1a202c; margin-bottom: 12px; font-weight: 800; }
    p { text-align: left; color: #4a5568; line-height: 1.6; }
`;

export const SurveyBox = styled.div`
    border: 2px solid #cbd5e0;
    padding: 30px;
    margin: 30px 0;
    border-radius: 16px;
    background-color: #f8fafc;
    h4 { font-size: 1.3em; margin-bottom: 20px; color: #1a202c; text-align: center; border-bottom: 2px solid #edf2f7; padding-bottom: 12px; font-weight: 700; }
    p { font-weight: 600; color: #2d3748; }
    ul { list-style-type: '• '; padding-left: 20px; margin-top: 15px; color: #4a5568; }
`;

export const BarChartContainer = styled.div`
    margin: 40px auto;
    padding: 35px;
    border: 1px solid #edf2f7;
    border-radius: 20px;
    background: #fff;
    max-width: 650px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    h4 { text-align: center; margin-bottom: 35px; color: #1a202c; font-weight: 800; font-size: 1.4em; }
`;

export const BarChart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 220px;
    border-left: 3px solid #cbd5e0;
    border-bottom: 3px solid #cbd5e0;
    position: relative;
    padding: 0 15px;
`;

export const BarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    width: 60px;
`;

export const Bar = styled.div<{ height: number; color: string }>`
    width: 100%;
    background: linear-gradient(to top, ${props => props.color}, ${props => props.color}dd);
    height: ${props => props.height}%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;
    font-weight: 800;
    font-size: 0.9em;
    padding-top: 8px;
    border-radius: 8px 8px 0 0;
    transition: height 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
`;

export const BarLabel = styled.span`
    margin-top: 15px;
    font-size: 0.85em;
    color: #4a5568;
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
`;

export const DialogueCompletionExercise = styled.div`
    margin-top: 30px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 35px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
`;

export const DialogueLine = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
    align-items: flex-start;
    padding-bottom: 25px;
    border-bottom: 1px dashed #cbd5e0;
    &:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
    @media (max-width: 768px) { flex-direction: column; }
`;

export const DialogueText = styled.div`
    flex: 2;
    p { margin-bottom: 10px; line-height: 1.7; color: #2d3748; }
    strong { color: #1a202c; font-weight: 800; }
`;

export const DialogueBlank = styled.div`
    border: 1px dashed #cbd5e0;
    min-height: 60px;
    border-radius: 10px;
    background-color: #f8fafc;
    margin-top: 12px;
    padding: 15px;
    color: #a0aec0;
    font-style: italic;
    display: flex;
    align-items: center;
`;

export const DialogueAction = styled.div`
    flex: 1;
    background-color: #edf2f7;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 12px;
    font-size: 0.95em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    p { margin: 0; font-weight: 800; color: #2d3748; line-height: 1.3; }
`;
