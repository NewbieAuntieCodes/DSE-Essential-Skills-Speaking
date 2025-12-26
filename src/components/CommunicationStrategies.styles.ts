/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';
import { 
    SharedContainer, 
    SharedSection, 
    SharedBackButton, 
    SharedTable, 
    SharedTh, 
    SharedTd, 
    SharedExerciseBox, 
    SharedInstruction, 
    SharedWordGrid, 
    SharedWordBox, 
    SharedArticleBox,
    SharedRememberBox,
    SharedDialogueBubble
} from '../styles/SharedStyles';

export const CommunicationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = styled(SharedSection)`
    ul.do-dont-list {
        list-style-type: none;
        padding-left: 0;

        li {
            padding-left: 2.5em;
            position: relative;
            margin-bottom: 0.8em;

            &::before {
                position: absolute;
                left: 0;
                font-size: 1.2em;
            }
        }

        &.do li::before { content: '✅'; }
        &.dont li::before { content: '❌'; }
    }
`;

export const StepDiagram = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0;
    gap: 15px;
    flex-wrap: wrap;
`;

export const StepBox = styled.div`
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 18px;
    text-align: center;
    color: #2d3748;
    flex: 1;
    min-width: 160px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    font-weight: 500;
`;

export const Arrow = styled.span`
    font-size: 1.8em;
    color: #cbd5e0;
`;

export const ConversationContainer = styled.div`
    display: flex;
    gap: 25px;
    margin: 25px 0;
    flex-wrap: wrap;
`;

export const ConversationBubble = SharedDialogueBubble;
export const RememberBox = SharedRememberBox;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const WordGrid = SharedWordGrid;
export const WordBox = SharedWordBox;
export const ArticleBox = SharedArticleBox;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; margin-bottom: 12px; }
`;

export const FillInTheBlankExercise = styled.div`
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 25px;
`;

export const BlankBox = styled.span`
    display: inline-block;
    width: 200px;
    height: 32px;
    border: 1px dashed #cbd5e0;
    background-color: #f8fafc;
    margin: 0 8px;
    vertical-align: middle;
    border-radius: 4px;
`;
