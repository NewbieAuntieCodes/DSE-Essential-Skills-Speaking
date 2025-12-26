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
    SharedArticleBox,
    SharedNoteCard,
    SharedRememberBox,
    SharedFlowChart,
    SharedFlowChartStep,
    SharedFlowChartArrow
} from '../styles/SharedStyles';

export const IdeasContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const ArticleBox = SharedArticleBox;
export const NoteCard = SharedNoteCard;
export const RememberBox = SharedRememberBox;
export const FlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const JobGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
    margin: 30px 0;
`;

export const JobCard = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    background: #fff;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid #edf2f7;
    box-shadow: 0 4px 6px rgba(0,0,0,0.03);
    transition: all 0.2s;
    &:hover { transform: translateY(-3px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.08); border-color: #cbd5e0; }

    img { width: 150px; height: 100px; object-fit: cover; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    div { flex: 1; }
    h4 { margin-bottom: 8px; color: #1a202c; font-weight: 800; font-size: 1.2em; }
    p { margin: 0; font-size: 0.98em; color: #4a5568; line-height: 1.6; }

    @media (max-width: 600px) { flex-direction: column; text-align: center; img { width: 100%; height: 160px; } }
`;

export const StructureDiagram = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 40px 0;
    flex-wrap: wrap;
    background: #f8fafc;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid #edf2f7;
`;

export const StructureBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 25px;
    border-radius: 16px;
    background: #fff;
    text-align: left;
    min-width: 280px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.04);
    p { margin-bottom: 8px !important; font-weight: 600; color: #2d3748; &:last-child { margin-bottom: 0 !important; } }
`;

export const Arrow = styled.span` font-size: 2em; color: #cbd5e0; font-weight: bold; `;

export const WordBank = styled.div`
    background: #f1f5f9;
    padding: 25px;
    border-radius: 16px;
    margin-bottom: 30px;
    font-size: 0.95em;
    p { margin-bottom: 12px !important; line-height: 1.8; color: #4a5568; &:last-child { margin-bottom: 0 !important; } }
    strong { color: #1a202c; margin-right: 8px; }
`;

export const NotecardExercise = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 35px;
    border-radius: 16px;
    margin-top: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #edf2f7 30px, #edf2f7 30px);
    line-height: 30px;
    h4 { margin-bottom: 25px; background: #fff; display: inline-block; padding-right: 15px; font-weight: 500; font-size: 1.1em; }
    h4 strong { font-weight: 800; color: #1a202c; }
    p { font-weight: 800; background: #fff; padding-right: 12px; display: inline-block; color: #2d3748; margin-bottom: 5px; }
    .blank-space { min-height: 90px; }
`;

export const ExamPracticeNotecard = styled.div`
    background: #f8fafc;
    border: 2px dashed #cbd5e0;
    padding: 30px;
    border-radius: 16px;
    margin: 30px auto;
    max-width: 450px;
    p { font-weight: 800; color: #4a5568; margin-bottom: 25px; font-size: 1.15em; text-align: center; &:last-child { margin-bottom: 0; } }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    margin-top: 30px;
    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; font-weight: 500; }
`;
