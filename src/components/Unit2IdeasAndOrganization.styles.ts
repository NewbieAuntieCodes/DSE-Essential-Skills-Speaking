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
    SharedWordGrid,
    SharedWordBox,
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
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;
export const ResponseFlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const MindMapGrid = styled.div`
    display: grid;
    grid-template-areas:
        "topleft . topright"
        ". center ."
        "bottomleft bottomcenter bottomright";
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 25px;
    align-items: center;
    justify-items: center;
    margin: 40px 0;

    @media (max-width: 900px) {
        grid-template-areas: "center" "topleft" "topright" "bottomleft" "bottomright" "bottomcenter";
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

export const MindMapCenter = styled.div`
    grid-area: center;
    background: linear-gradient(135deg, #2d3748, #1a202c);
    color: white;
    padding: 25px;
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    line-height: 1.2;
`;

export const MindMapNode = styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 20px;
    width: 240px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    h4 {
        color: #2d3748;
        font-size: 1.1em;
        margin-bottom: 12px;
        font-weight: 700;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        font-size: 0.9em;
        li { margin-bottom: 6px; color: #4a5568; position: relative; padding-left: 15px; }
        li::before { content: '•'; position: absolute; left: 0; color: #cbd5e0; }
    }

    @media (max-width: 900px) { width: 100%; max-width: 400px; }
`;

export const NodeTopLeft = styled(MindMapNode)` grid-area: topleft; justify-self: end; `;
export const NodeTopRight = styled(MindMapNode)` grid-area: topright; justify-self: start; `;
export const NodeBottomLeft = styled(MindMapNode)` grid-area: bottomleft; justify-self: end; `;
export const NodeBottomRight = styled(MindMapNode)` grid-area: bottomright; justify-self: start; `;
export const NodeBottomCenter = styled(MindMapNode)` grid-area: bottomcenter; `;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 10px; }
`;

export const NoteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 25px 0;
`;

export const EmptyNote = styled.div`
    border: 2px dashed #cbd5e0;
    border-radius: 12px;
    padding: 25px;
    min-height: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
        color: #2d3748;
        font-weight: 700;
        text-align: center;
        background: #f8fafc;
        padding: 8px;
        border-radius: 8px;
    }
`;

export const AnticipationMindMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 30px;
    margin: 20px auto;
    max-width: 700px;
    background: #f8fafc;
    border-radius: 20px;
`;

export const AnticipationNode = styled.div`
    background: #fff;
    color: #4a5568;
    padding: 12px 24px;
    border-radius: 30px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    font-size: 0.95em;
    text-align: center;
    border: 1px solid #edf2f7;
    font-weight: 500;
`;

export const TimeManagementContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
    flex-wrap: wrap;
`;

export const PieChart = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    background: conic-gradient(
        #4a5568 0% 70%,        
        #a0aec0 70% 90%,     
        #4299e1 90% 100%       
    );
`;

export const PieChartLabels = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const PieChartLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95em;
    color: #2d3748;

    span:first-child {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        display: inline-block;
    }
`;

export const ExamPracticeNotecard = styled(SharedNoteCard)`
    background: #f8fafc;
    border-color: #cbd5e0;
    max-width: 500px;
    margin: 30px auto;
    border-left: 1px solid #cbd5e0;
    border-top: 4px solid #4a5568;

    h4 { text-align: center; color: #1a202c; border-bottom: 1px solid #edf2f7 !important; padding-bottom: 15px; margin-bottom: 20px; }
    p { text-align: center; color: #4a5568; margin-bottom: 15px; font-size: 1.1em; font-weight: 600; }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    max-width: 650px;
    margin: 25px auto;

    li { margin-bottom: 12px; padding-left: 8px; line-height: 1.7; }
`;
