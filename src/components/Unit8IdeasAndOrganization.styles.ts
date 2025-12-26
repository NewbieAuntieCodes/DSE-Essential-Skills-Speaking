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
export const RememberBox = SharedRememberBox;
export const ResponseFlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const DoNotTakeAway = styled.div`
    background-color: #2d3748;
    color: white;
    padding: 10px 25px;
    font-weight: 800;
    text-align: center;
    margin: 30px auto 0;
    width: fit-content;
    border-radius: 6px;
    letter-spacing: 1px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 40px;
    border-radius: 20px;
    margin: 35px 0;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #edf2f7 30px, #edf2f7 30px);
    min-height: 450px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
`;

export const ExamPracticeContainer = styled.div`
    display: flex;
    gap: 40px;
    margin: 30px 0;
    @media (max-width: 900px) { flex-direction: column; }
`;

export const Sidebar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    div { background: #f8fafc; border-radius: 12px; padding: 18px; font-size: 0.95em; color: #4a5568; border: 1px solid #edf2f7; font-weight: 500; line-height: 1.5; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
`;

export const MainContent = styled.div` flex: 2; `;

export const ExamPracticeNotecard = styled.div`
    background: #fff;
    border: 2px dashed #cbd5e0;
    padding: 35px;
    border-radius: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p { font-weight: 800; color: #2d3748; margin-bottom: 0; font-size: 1.25em; text-align: center; background: #f8fafc; padding: 15px; border-radius: 12px; }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    margin-top: 30px;
    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; font-weight: 500; }
`;
