
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
    SharedRememberBox,
    SharedNoteCard,
    SharedFlowChart,
    SharedFlowChartStep,
    SharedFlowChartArrow
} from '../styles/SharedStyles';

export const IdeasContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const ArticleBox = SharedArticleBox;
export const RememberBox = SharedRememberBox;
export const NoteCard = SharedNoteCard;

// Fix: Changed ResponseFlowChart to FlowChart to match component import
export const FlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const WordBank = styled.div`
    background: #f1f5f9;
    padding: 25px;
    border-radius: 16px;
    margin-bottom: 30px;
    font-size: 0.95em;
    p { margin-bottom: 12px !important; line-height: 1.8; color: #4a5568; &:last-child { margin-bottom: 0 !important; } }
    strong { color: #1a202c; margin-right: 8px; }
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 35px;
    border-radius: 16px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #edf2f7 30px, #edf2f7 30px);
    min-height: 350px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    line-height: 30px;
    p { font-weight: 800; background: #fff; padding-right: 12px; display: inline-block; color: #2d3748; margin-bottom: 5px; }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; font-weight: 500; }
`;

export const FlowChartContainer = styled(SharedFlowChart)`
    margin: 40px auto;
`;
