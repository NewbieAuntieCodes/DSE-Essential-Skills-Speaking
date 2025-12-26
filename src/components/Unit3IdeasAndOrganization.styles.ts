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
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;
export const ResponseFlowChart = SharedFlowChart;
export const FlowChartStep = SharedFlowChartStep;
export const FlowChartArrow = SharedFlowChartArrow;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; font-weight: 700; margin-bottom: 15px; }
`;

export const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin: 25px 0;
`;

export const OptionCard = styled.div`
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    background: #f8fafc;
    min-height: 110px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover { transform: translateY(-3px); border-color: #cbd5e0; }

    h5 { font-size: 1.1em; color: #2d3748; margin: 0; font-weight: 700; }
`;

export const NoteTakingExample = styled.div`
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 30px;
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);

    hr { border: none; border-top: 1px solid #edf2f7; margin: 20px 0; }

    div { margin-bottom: 25px; padding-left: 20px; border-left: 4px solid #cbd5e0; }
    div:last-child { margin-bottom: 0; }

    h5 { color: #4a5568; font-weight: 700; margin-bottom: 12px; }
    p strong { color: #1a202c; }
    ul { list-style-type: '• '; padding-left: 15px; }
`;

export const Notecard = styled.div`
    background: #fff;
    border: 1px solid #cbd5e0;
    border-radius: 12px;
    padding: 30px;
    margin-top: 25px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    background-image: repeating-linear-gradient(to bottom, transparent, transparent 29px, #f1f5f9 30px, #f1f5f9 30px);
    line-height: 30px;

    h4 { text-align: center; margin-bottom: 20px; background: #fff; padding: 0 15px; display: inline-block; font-weight: 800; color: #2d3748; }
    p { font-weight: 700; background: #fff; padding-right: 12px; display: inline-block; color: #4a5568; }

    .blank-space { min-height: 90px; &.small { min-height: 60px; } }
`;

export const IndividualResponseList = styled.ol`
    list-style-type: decimal;
    padding-left: 25px;
    color: #4a5568;
    max-width: 650px;
    margin: 30px auto;

    li { margin-bottom: 12px; padding-left: 10px; line-height: 1.7; }
`;

export const SpeakingPromptsContainer = styled.div` margin-top: 50px; `;

type PromptType = 'advantage' | 'disadvantage' | 'accessibility';

const getPromptColors = (type: PromptType) => {
    switch (type) {
        case 'advantage': return { bg: '#f0fdf4', border: '#bcf2d9', title: '#065f46', accent: '#34d399' };
        case 'disadvantage': return { bg: '#fff5f5', border: '#fed7d7', title: '#9b2c2c', accent: '#f87171' };
        case 'accessibility': return { bg: '#f0f9ff', border: '#bee3f8', title: '#2a4365', accent: '#4299e1' };
    }
};

export const PromptSection = styled.div<{ type: PromptType }>`
    padding: 30px;
    border-radius: 16px;
    border: 1px solid ${props => getPromptColors(props.type).border};
    background-color: ${props => getPromptColors(props.type).bg};
    margin-bottom: 40px;
`;

export const PromptSectionTitle = styled.h3<{ type: PromptType }>`
    font-size: 1.5em !important;
    color: ${props => getPromptColors(props.type).title};
    text-align: center;
    margin-bottom: 25px !important;
    border-bottom: 3px solid ${props => getPromptColors(props.type).border} !important;
    padding-bottom: 12px !important;
    font-weight: 800;
`;

export const PromptGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
`;

export const PromptCard = styled.div<{ type: PromptType }>`
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.04);
    border-left: 6px solid ${props => getPromptColors(props.type).accent};

    h5 { font-size: 1.15em; color: #1a202c; margin-bottom: 18px; font-weight: 700; }
    p { margin-bottom: 12px !important; font-size: 0.98em; line-height: 1.6 !important; color: #4a5568 !important; }
    p strong { font-weight: 700; color: #2d3748; }
`;
