
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const IdeasContainer = styled.div`
    padding: 20px 30px;
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h2 {
        text-align: center;
        margin-bottom: 25px;
        color: #2d3748;
    }

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const NavTabs = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #edf2f7;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 5px;
`;

export const NavTab = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    padding: 12px 20px;
    font-size: 1em;
    font-weight: bold;
    color: ${props => props.active ? '#4299e1' : '#718096'};
    border-bottom: 3px solid ${props => props.active ? '#4299e1' : 'transparent'};
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
        color: #4299e1;
    }

    @media (max-width: 600px) {
        flex: 1 1 40%;
        font-size: 0.85em;
        padding: 10px;
    }
`;

export const PaginationControls = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #edf2f7;
`;

export const PageButton = styled.button`
    background-color: #4299e1;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background-color: #3182ce;
    }

    &:disabled {
        background-color: #cbd5e0;
        cursor: not-allowed;
    }
`;

export const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #4299e1;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;

export const Section = styled.section`
    margin-bottom: 20px;
    min-height: 400px;
    
    h3 {
        color: #4a5568;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 8px;
        margin-bottom: 15px;
        font-size: 1.5em;
    }

    p {
        color: #718096;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    ul {
        list-style-position: inside;
        padding-left: 10px;
        margin-bottom: 15px;
        color: #4a5568;
        line-height: 1.8;
    }
`;

export const InstructionBox = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;

    h4 {
        color: #2d3748;
        margin-bottom: 15px;
        font-size: 1.1em;
        font-weight: bold;
    }
`;

export const ArticleBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
    background-color: #f7fafc;

    h4 {
        font-size: 1.2em;
        margin-bottom: 15px;
        color: #2d3748;
        text-align: center;
    }
`;

export const HighlightedText = styled.span`
    background-color: #a0aec0;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
`;

export const CheckboxLabel = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #4a5568;
    text-align: center;
    font-weight: bold;
    margin-right: 8px;
    color: #4a5568;
    line-height: 18px;
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const DialogueBubble = styled.div`
    background-color: #e2e8f0;
    border-radius: 10px;
    padding: 15px;
    
    p {
        margin: 0;
    }
`;

export const NoteTakingTips = styled.div`
    background: #f0f9ff;
    border-left: 4px solid #60a5fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 4px;
    
    ul {
        list-style-type: '✓ ';
        padding-left: 20px;
    }
`;

export const PrepStructure = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
`;

export const PrepStep = styled.div`
    background: #edf2f7;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    color: #2d3748;
    flex: 1;
    min-width: 120px;
`;

export const Exercise = styled.div`
    margin-top: 25px;
    padding: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f7fafc;
`;

export const Instruction = styled.p`
    color: #4a5568 !important;
    margin-bottom: 20px !important;
    font-weight: bold;
`;

export const WordBank = styled.div`
    background: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.9em;
    line-height: 1.7;
`;

export const Notecard = styled.div`
    background-color: #fff;
    border: 1px solid #cbd5e0;
    padding: 20px;
    border-radius: 8px;
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 24px, #e2e8f0 25px, #e2e8f0 25px);
    min-height: 200px;
`;

export const FlowChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 30px 0;
`;

export const FlowChartStep = styled.div`
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    padding: 15px 20px;
    width: 80%;
    max-width: 500px;
    text-align: center;

    p {
        margin-bottom: 5px !important;
        font-weight: bold;
        color: #2d3748;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: #718096;
    }
`;

export const FlowChartArrow = styled.div`
    font-size: 1.8em;
    color: #a0aec0;
    font-weight: bold;
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 20px;
    color: #4a5568;

    li {
        margin-bottom: 10px;
        padding-left: 5px;
        line-height: 1.6;
    }
`;

/** --- Sample Section Styles --- **/

export const SampleContainer = styled.div`
    margin: 25px 0;
    padding: 20px;
    border: 2px solid #ebf8ff;
    background: #f0f9ff;
    border-radius: 12px;
`;

export const SampleTabGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 20px;
    overflow-x: auto;
    padding-bottom: 5px;
    
    &::-webkit-scrollbar {
        height: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: #cbd5e0;
        border-radius: 10px;
    }
`;

export const SampleTabItem = styled.button<{ active: boolean }>`
    background: ${props => props.active ? '#4299e1' : '#fff'};
    color: ${props => props.active ? '#fff' : '#4a5568'};
    border: 1px solid #4299e1;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
        background: ${props => props.active ? '#3182ce' : '#e6fffa'};
    }
`;

export const SampleContentBox = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border-left: 6px solid #4299e1;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const PreSet = styled.div`
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
    
    .pre-title {
        color: #2b6cb0;
        font-weight: bold;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        
        span {
            background: #2b6cb0;
            color: #fff;
            font-size: 0.7em;
            padding: 2px 6px;
            border-radius: 4px;
        }
    }
    
    .pre-body {
        margin-left: 10px;
        font-size: 0.95em;
        line-height: 1.6;
        
        p {
            margin-bottom: 8px !important;
            color: #4a5568 !important;
        }
        
        strong { color: #2d3748; }
        .label { color: #718096; font-style: italic; margin-right: 5px; }
    }
`;

/* --- New Individual Response Styles --- */

export const IRCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 0;
`;

export const IRCard = styled.div<{ active: boolean }>`
    background: ${props => props.active ? '#f0f9ff' : 'white'};
    border: 1px solid ${props => props.active ? '#4299e1' : '#e2e8f0'};
    border-radius: 10px;
    padding: 15px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        border-color: #4299e1;
        box-shadow: 0 4px 10px rgba(66, 153, 225, 0.1);
        transform: translateX(5px);
    }

    p {
        margin: 0 !important;
        font-weight: bold;
        color: ${props => props.active ? '#2b6cb0' : '#4a5568'};
        font-size: 0.95em;
    }

    span {
        font-size: 1.2em;
        color: #a0aec0;
        transform: ${props => props.active ? 'rotate(90deg)' : 'none'};
        transition: transform 0.3s;
    }
`;

export const IRFullAnswer = styled.div`
    margin-top: 15px;
    padding: 25px;
    background: #fff;
    border: 2px solid #edf2f7;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    animation: slideIn 0.4s ease-out;

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const IRSectionHeader = styled.div<{ color: string }>`
    display: inline-block;
    padding: 4px 10px;
    background: ${props => props.color};
    color: white;
    font-size: 0.75em;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
`;

export const IRParagraph = styled.p`
    font-size: 1.05em;
    line-height: 1.7;
    color: #2d3748;
    margin-bottom: 20px !important;

    strong {
        color: #1a202c;
    }

    .meta-tag {
        color: #718096;
        font-weight: bold;
        font-family: monospace;
        margin-right: 8px;
    }
`;

export const IRDivider = styled.hr`
    border: 0;
    border-top: 1px dashed #cbd5e0;
    margin: 15px 0;
`;
