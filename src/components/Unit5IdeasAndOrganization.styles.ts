
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
    SharedFlowChart,
    SharedFlowChartStep,
    SharedFlowChartArrow,
    SharedWordGrid,
    SharedWordBox,
    SharedDialogueBubble
} from '../styles/SharedStyles';

export const IdeasContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const ArticleBox = SharedArticleBox;
export const FlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

// Fix: Added missing CheckboxLabel export
export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    background: #fff;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #edf2f7;
    transition: all 0.2s;
    &:hover { border-color: #cbd5e0; background: #f8fafc; }
`;

// Fix: Added missing DialogueGrid export
export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 30px 0;
`;

// Fix: Added missing DialogueBubble export
export const DialogueBubble = SharedDialogueBubble;

// Fix: Added missing PrepStructure export
export const PrepStructure = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 25px 0;
`;

// Fix: Added missing PrepStep export
export const PrepStep = styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const HighlightedText = styled.span`
    background-color: #4a5568;
    color: white;
    padding: 3px 6px;
    border-radius: 4px;
    font-weight: 600;
`;

export const NoteTakingTips = styled.div`
    background: #ebf8ff;
    border-left: 6px solid #4299e1;
    padding: 25px;
    margin: 30px 0;
    border-radius: 4px 12px 12px 4px;
    ul { list-style-type: '✓ '; padding-left: 20px; font-weight: 500; color: #2c5282; }
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 35px;
    border-radius: 16px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #edf2f7 30px, #edf2f7 30px);
    min-height: 300px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    line-height: 30px;
`;

// Fix: Added missing WordBank export
export const WordBank = styled.div`
    background: #f1f5f9;
    padding: 25px;
    border-radius: 16px;
    margin-bottom: 30px;
    font-size: 0.95em;
    p { margin-bottom: 12px !important; line-height: 1.8; color: #4a5568; &:last-child { margin-bottom: 0 !important; } }
    strong { color: #1a202c; margin-right: 8px; }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; font-weight: 500; }
`;

export const SampleContainer = styled.div`
    margin: 40px 0;
    padding: 30px;
    border: 2px solid #ebf8ff;
    background: #f0f9ff;
    border-radius: 20px;
`;

export const SampleTabGroup = styled.div`
    display: flex; gap: 12px; margin-top: 20px; margin-bottom: 25px; overflow-x: auto; padding-bottom: 10px;
    &::-webkit-scrollbar { height: 4px; }
    &::-webkit-scrollbar-thumb { background: #cbd5e0; border-radius: 10px; }
`;

export const SampleTabItem = styled.button<{ active: boolean }>`
    background: ${props => props.active ? '#3182ce' : '#fff'};
    color: ${props => props.active ? '#fff' : '#4a5568'};
    border: 1px solid #3182ce;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 0.9em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    &:hover { background: ${props => props.active ? '#2b6cb0' : '#ebf8ff'}; }
`;

export const SampleContentBox = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-left: 8px solid #3182ce;
`;

export const PreSet = styled.div`
    margin-bottom: 30px;
    &:last-child { margin-bottom: 0; }
    .pre-title { color: #2c5282; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; span { background: #2c5282; color: #fff; font-size: 0.75em; padding: 3px 8px; border-radius: 6px; } }
    .pre-body { margin-left: 15px; font-size: 1em; line-height: 1.7; p { margin-bottom: 10px !important; color: #4a5568 !important; } strong { color: #1a202c; } .label { color: #718096; font-style: italic; margin-right: 8px; font-weight: 600; } }
`;

export const IRCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 30px 0;
`;

export const IRCard = styled.div<{ active: boolean }>`
    background: ${props => props.active ? '#f0f9ff' : 'white'};
    border: 1px solid ${props => props.active ? '#4299e1' : '#e2e8f0'};
    border-radius: 12px;
    padding: 20px 25px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: ${props => props.active ? '0 10px 15px -3px rgba(66, 153, 225, 0.1)' : '0 1px 3px rgba(0,0,0,0.05)'};

    &:hover { border-color: #4299e1; transform: translateX(5px); }
    p { margin: 0 !important; font-weight: 700; color: ${props => props.active ? '#2b6cb0' : '#2d3748'}; font-size: 1.05em; }
    span { font-size: 1.2em; color: #cbd5e0; transform: ${props => props.active ? 'rotate(90deg)' : 'none'}; transition: transform 0.3s; }
`;

export const IRFullAnswer = styled.div`
    margin-top: 20px;
    padding: 35px;
    background: #fff;
    border: 2px solid #edf2f7;
    border-radius: 16px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.4s ease-out;
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;

export const IRSectionHeader = styled.div<{ color: string }>`
    display: inline-block;
    padding: 6px 14px;
    background: ${props => props.color};
    color: white;
    font-size: 0.8em;
    font-weight: 800;
    border-radius: 6px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const IRParagraph = styled.p`
    font-size: 1.1em;
    line-height: 1.8;
    color: #2d3748;
    margin-bottom: 25px !important;
    strong { color: #1a202c; font-weight: 800; }
    .meta-tag { color: #718096; font-weight: 700; font-family: monospace; margin-right: 10px; background: #f7fafc; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }
`;

export const IRDivider = styled.hr` border: 0; border-top: 2px dashed #edf2f7; margin: 25px 0; `;
