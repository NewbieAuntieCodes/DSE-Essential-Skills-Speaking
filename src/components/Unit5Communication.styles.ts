
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
    SharedDialogueBubble,
    SharedWordGrid,
    SharedWordBox
} from '../styles/SharedStyles';

export const CommunicationContainer = SharedContainer;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const ArticleBox = SharedArticleBox;
export const RememberBox = SharedRememberBox;
export const DialogueBubble = SharedDialogueBubble;
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;
export const BackButton = SharedBackButton;

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

// Fix: Added missing AudioPlayerWrapper export
export const AudioPlayerWrapper = styled.div`
    margin-top: 15px;
    width: 100%;
`;

export const NavTabs = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #edf2f7;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 10px;
`;

export const NavTab = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    padding: 12px 20px;
    font-size: 1em;
    font-weight: 700;
    color: ${props => props.active ? '#3182ce' : '#718096'};
    border-bottom: 4px solid ${props => props.active ? '#3182ce' : 'transparent'};
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover { color: #3182ce; background: #f8fafc; }
    @media (max-width: 600px) { flex: 1 1 45%; font-size: 0.9em; }
`;

export const PaginationControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 1px solid #edf2f7;
`;

export const PageButton = styled.button`
    background-color: #3182ce;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 6px rgba(49, 130, 206, 0.2);

    &:hover { background-color: #2b6cb0; transform: translateY(-1px); }
    &:disabled { background-color: #cbd5e0; cursor: not-allowed; box-shadow: none; }
`;

export const SentenceList = styled.ol`
    list-style-type: decimal;
    padding-left: 30px;
    color: #4a5568;

    li {
        margin-bottom: 20px;
        padding: 15px 20px;
        border: 1px solid #edf2f7;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }
`;

export const PracticePointsContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PracticePointCard = styled.div<{ isFor: boolean; isExpanded: boolean }>`
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 6px solid;
    border-left-color: ${props => props.isFor ? '#48bb78' : '#f56565'};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:hover { transform: translateX(5px); box-shadow: 0 8px 15px rgba(0,0,0,0.08); }

    h4 {
        font-size: 1.2em;
        color: #1a202c;
        margin-bottom: ${props => props.isExpanded ? '20px' : '0'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        &::after { content: '${props => props.isExpanded ? '▲' : '▼'}'; font-size: 0.8em; color: #cbd5e0; }
    }

    p {
        margin-bottom: 15px !important;
        font-size: 1em;
        line-height: 1.6 !important;
        color: #4a5568 !important;
        opacity: ${props => props.isExpanded ? 1 : 0};
        max-height: ${props => props.isExpanded ? '600px' : '0'};
        overflow: hidden;
        transition: all 0.3s ease;
        strong { color: #1a202c; font-weight: 800; }
    }

    .click-hint { font-size: 0.85em; color: #a0aec0; margin-top: 8px; font-style: italic; }
`;

export const MindMapContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px 1fr;
    grid-template-rows: auto auto;
    gap: 25px;
    align-items: center;
    margin: 40px auto;
    position: relative;
    @media (max-width: 768px) { grid-template-columns: 1fr; grid-template-rows: auto; }
`;

export const MindMapCenter = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background: linear-gradient(135deg, #4a5568, #2d3748);
    color: white;
    padding: 25px;
    border-radius: 12px;
    text-align: center;
    font-weight: 800;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    line-height: 1.3;
    @media (max-width: 768px) { grid-column: 1 / 2; grid-row: 1 / 2; margin-bottom: 25px; }
`;

export const MindMapNode = styled.div`
    border: 2px dashed #cbd5e0;
    border-radius: 16px;
    padding: 20px;
    min-height: 110px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.2s;
    &:hover { border-color: #a0aec0; background: #f8fafc; }
    
    &.top-left { grid-column: 1/2; grid-row: 1/2; justify-self: end; width: 100%; }
    &.top-right { grid-column: 3/4; grid-row: 1/2; justify-self: start; width: 100%; }
    &.bottom-left { grid-column: 1/2; grid-row: 2/3; justify-self: end; width: 100%; }
    &.bottom-right { grid-column: 3/4; grid-row: 2/3; justify-self: start; width: 100%; }

    @media (max-width: 768px) { grid-column: 1 / 2 !important; grid-row: auto !important; width: 100% !important; }
`;

export const DialogueCompletion = styled.div`
    margin-top: 30px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
`;

export const DialogueLine = styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 25px;
    align-items: flex-start;
    &:last-child { margin-bottom: 0; }
    @media (max-width: 768px) { flex-direction: column; }
`;

export const DialogueText = styled.div`
    flex: 2;
    p { margin-bottom: 8px; line-height: 1.6; }
    strong { color: #1a202c; font-weight: 800; }
`;

export const DialogueBlank = styled.div`
    border: 1px dashed #cbd5e0;
    min-height: 60px;
    border-radius: 8px;
    background-color: #f8fafc;
    margin-top: 10px;
`;

export const DialogueAction = styled.div`
    flex: 1;
    background-color: #f1f5f9;
    border: 1px solid #e2e8f0;
    padding: 15px;
    border-radius: 10px;
    font-size: 0.9em;
    color: #4a5568;
    p { margin: 0; font-weight: 700; color: #2d3748; }
`;

export const SampleContainer = styled.div`
    margin: 40px 0;
    padding: 30px;
    border: 2px solid #ebf8ff;
    background: #f0f9ff;
    border-radius: 20px;
`;

export const SampleTabGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
    margin-bottom: 25px;
    overflow-x: auto;
    padding-bottom: 10px;
    scrollbar-width: thin;
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
    .pre-body { margin-left: 15px; font-size: 1em; line-height: 1.7; p { margin-bottom: 10px !important; } strong { color: #1a202c; } .label { color: #718096; font-style: italic; margin-right: 8px; font-weight: 600; } }
`;
