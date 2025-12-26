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
    SharedFlowChart,
    SharedFlowChartStep,
    SharedFlowChartArrow,
    SharedRememberBox
} from '../styles/SharedStyles';

export const IdeasContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const FlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;
export const RememberBox = SharedRememberBox;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const AdGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 30px 0;
    border: 1px solid #e2e8f0;
    padding: 30px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
`;

export const AdCard = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
    padding: 15px;
    border-radius: 12px;
    transition: background 0.2s;

    &:hover { background: #f8fafc; }

    img { width: 180px; height: 120px; object-fit: cover; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    div { flex: 1; }
    h4 { color: #1a202c; margin-bottom: 10px; font-size: 1.3em; font-weight: 700; }
    p { margin: 0; font-size: 0.98em; color: #4a5568; line-height: 1.6; }

    @media (max-width: 600px) { flex-direction: column; text-align: center; img { width: 100%; height: 180px; } }
`;

export const VisualDesignMindMap = styled.div`
    display: grid;
    grid-template-areas: "elements . styles" ". center ." "effects . text";
    grid-template-columns: 1fr auto 1fr;
    gap: 30px;
    align-items: center;
    margin: 50px 0;
    
    @media (max-width: 768px) {
        grid-template-areas: "center" "elements" "styles" "effects" "text";
        grid-template-columns: 1fr;
    }
`;

export const CenterNode = styled.div`
    grid-area: center;
    background: linear-gradient(135deg, #4a5568, #2d3748);
    color: white;
    padding: 20px 30px;
    border-radius: 12px;
    text-align: center;
    font-weight: 800;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    font-size: 1.1em;
`;

export const MindMapBubble = styled.div`
    background: #f8fafc;
    border-radius: 16px;
    padding: 25px;
    border: 1px solid #edf2f7;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    
    h4 { font-size: 1.15em; color: #2d3748; margin-bottom: 15px; font-weight: 700; }
    ul { list-style: none; padding: 0; margin: 0; font-size: 0.95em; li { margin-bottom: 8px; color: #4a5568; } }
    
    &.elements { grid-area: elements; justify-self: end; }
    &.styles { grid-area: styles; justify-self: start; }
    &.effects { grid-area: effects; justify-self: end; }
    &.text { grid-area: text; justify-self: start; }

    @media (max-width: 768px) { justify-self: stretch !important; }
`;

export const NoteTakingMindMap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    position: relative;
    padding: 40px 0;

    &::before, &::after { content: ''; position: absolute; background: #cbd5e0; top: 50%; left: 50%; transform: translate(-50%, -50%); }
    &::before { width: 100%; height: 2px; }
    &::after { height: 100%; width: 2px; }
`;

export const MindMapQuadrant = styled.div`
    border: 2px dashed #cbd5e0;
    border-radius: 16px;
    padding: 25px;
    min-height: 180px;
    background-color: #fff;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    p { color: #4a5568; font-weight: 700; text-align: center; line-height: 1.4; }
`;

export const MindMapCenterLabel = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2d3748;
    color: white;
    padding: 12px 20px;
    border-radius: 10px;
    z-index: 2;
    font-weight: 800;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    font-size: 0.9em;
    width: 140px;
`;

export const WordBank = styled.div`
    background: #f1f5f9;
    padding: 25px;
    border-radius: 16px;
    margin-top: 30px;
    font-size: 0.95em;
    p { margin: 0; line-height: 1.8; color: #4a5568; }
    strong { color: #1a202c; margin-right: 8px; }
`;

export const Notecard = styled.div`
    background: #fff;
    border: 1px solid #cbd5e0;
    border-radius: 16px;
    padding: 35px;
    margin: 30px auto;
    max-width: 550px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #edf2f7 30px, #edf2f7 30px);

    h4 { text-align: center; margin-bottom: 25px; font-weight: 800; color: #1a202c; background: #fff; padding: 0 15px; display: inline-block; }
    p { font-weight: 700; margin-bottom: 12px; color: #2d3748; background: #fff; padding-right: 10px; display: inline-block; }
    .blank-space { min-height: 70px; margin-bottom: 25px; }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; }
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
