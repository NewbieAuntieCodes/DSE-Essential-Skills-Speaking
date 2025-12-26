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
    SharedArticleBox,
    SharedRememberBox,
    SharedDialogueBubble,
    SharedNoteCard
} from '../styles/SharedStyles';

export const IdeasContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const ArticleBox = SharedArticleBox;
export const ConversationBubble = SharedDialogueBubble;
export const NoteCard = SharedNoteCard;
export const Table = SharedTable;
export const Th = SharedTh;
export const Td = SharedTd;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const RememberBox = SharedRememberBox;

export const NoteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin: 25px 0;
`;

export const EmptyNote = styled.div`
    border: 2px dashed #cbd5e0;
    border-radius: 12px;
    padding: 20px;
    min-height: 160px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #718096;
        font-weight: 600;
        text-align: center;
    }
`;

export const AbbreviationList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    column-count: 3;
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;

    li { margin-bottom: 8px; font-family: monospace; }

    @media (max-width: 768px) {
        column-count: 2;
    }
`;

export const AIFeatureBox = styled.div`
    margin-top: 35px;
    padding: 30px;
    border: 2px dashed #4299e1;
    border-radius: 16px;
    background-color: #f0f9ff;
    text-align: center;

    h4 { color: #2b6cb0; margin-bottom: 12px; font-size: 1.4em; }
    p { margin-bottom: 20px; color: #4a5568; }
`;

export const GenerateButton = styled.button`
    background: linear-gradient(135deg, #4299e1, #3182ce);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 14px 32px;
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 14px rgba(66, 153, 225, 0.4);

    &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(66, 153, 225, 0.5);
    }

    &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

export const LoadingText = styled.p` color: #4a5568; font-style: italic; margin-top: 15px; `;
export const ErrorMessage = styled.p` color: #e53e3e; font-weight: bold; margin-top: 15px; `;

export const ResultsContainer = styled.div`
    margin-top: 25px;
    padding: 25px;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    h5 { color: #2d3748; margin-bottom: 15px; font-size: 1.2em; text-align: center; border-bottom: 2px solid #f7fafc; padding-bottom: 10px; }
    ul { list-style-type: '💡'; padding-left: 20px; }
    li { margin-bottom: 12px; padding-left: 10px; color: #4a5568; }
`;
