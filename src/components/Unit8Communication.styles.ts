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
    SharedDialogueBubble,
    SharedNoteCard,
    SharedFlowChart,
    SharedFlowChartStep,
    SharedFlowChartArrow
} from '../styles/SharedStyles';

export const CommunicationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const DialogueBubble = SharedDialogueBubble;
export const NoteCard = SharedNoteCard;
export const FlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

export const QuestionTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background-color: #cbd5e0;
    border: 2px solid #cbd5e0;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    div { background-color: #fff; padding: 25px; min-height: 180px; }
    h4 { margin: 0 0 15px 0; font-size: 1.25em; color: #1a202c; text-align: center; font-weight: 800; border-bottom: 2px solid #f7fafc; padding-bottom: 12px; }
    @media (max-width: 600px) { grid-template-columns: 1fr; }
`;
