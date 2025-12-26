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
    SharedDialogueBubble
} from '../styles/SharedStyles';

export const CommunicationContainer = SharedContainer;
export const BackButton = SharedBackButton;
export const Section = SharedSection;
export const Exercise = SharedExerciseBox;
export const Instruction = SharedInstruction;
export const RememberBox = SharedRememberBox;
export const ArticleBox = SharedArticleBox;
export const DialogueBubble = SharedDialogueBubble;

export const TipBox = styled(SharedRememberBox)`
    background: #ebf8ff;
    border-left-color: #4299e1;
    h4 { color: #2b6cb0; }
`;

export const InstructionBox = styled(SharedExerciseBox)`
    background: #f1f5f9;
    h4 { color: #1a202c; }
`;

export const DialogueGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
`;

export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 25px;
`;

export const PhotoCard = styled.div`
    text-align: center;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    
    h4 { margin-bottom: 12px; color: #2d3748; font-weight: 700; }
    p { font-size: 0.9em; color: #718096; line-height: 1.5; }
`;

export const StructureDiagram = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 30px 0;
    padding: 20px;
    background: #f8fafc;
    border-radius: 12px;
    flex-wrap: wrap;
    border: 1px solid #e2e8f0;
`;

export const StructureBox = styled.span`
    font-weight: 700;
    color: #1a202c;
    background: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export const PlusSign = styled.span`
    font-size: 1.5em;
    color: #a0aec0;
    font-weight: bold;
`;

export const AnnotationExercise = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
`;

export const AnnotationItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 768px) { flex-direction: column; align-items: stretch; }
`;

export const SpeakerBubble = styled(SharedDialogueBubble)`
    flex: 1;
    background: #f0f9ff;
    border-color: #bee3f8;
    strong { color: #2c5282; }
`;

export const AnnotationOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-basis: 260px;
`;

export const AnnotationOption = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95em;
    color: #4a5568;
`;

export const BlankBox = styled.span`
    display: inline-block;
    width: 180px;
    height: 30px;
    border: 1px dashed #cbd5e0;
    background-color: #f8fafc;
    border-radius: 4px;
`;
