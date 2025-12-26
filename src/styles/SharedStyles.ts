/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import styled from 'styled-components';

export const SharedContainer = styled.div`
    padding: 25px 35px;
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

    h2 {
        text-align: center;
        margin-bottom: 30px;
        color: #1a202c;
        font-size: 2em;
    }

    @media (max-width: 768px) {
        padding: 20px;
        border-radius: 0;
    }
`;

export const SharedBackButton = styled.button`
    background: transparent;
    border: none;
    color: #3182ce;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 25px;
    padding: 8px 0;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        color: #2b6cb0;
        text-decoration: underline;
        transform: translateX(-3px);
    }
`;

export const SharedSection = styled.section`
    margin-bottom: 45px;
    
    h3 {
        color: #2d3748;
        border-bottom: 2px solid #edf2f7;
        padding-bottom: 12px;
        margin-bottom: 20px;
        font-size: 1.6em;
        font-weight: 700;
    }

    p {
        color: #4a5568;
        line-height: 1.7;
        margin-bottom: 15px;
    }

    ul, ol {
        list-style-position: inside;
        padding-left: 10px;
        margin-bottom: 20px;
        color: #4a5568;
        line-height: 1.8;
    }
`;

export const SharedTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.95em;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border: 1px solid #edf2f7;
`;

export const SharedTh = styled.th`
    background-color: #f8fafc;
    color: #2d3748;
    padding: 15px;
    text-align: left;
    font-weight: 700;
    border-bottom: 2px solid #edf2f7;
`;

export const SharedTd = styled.td`
    padding: 15px;
    border-bottom: 1px solid #f1f5f9;
    color: #4a5568;
    vertical-align: top;
`;

export const SharedExerciseBox = styled.div`
    margin: 35px 0;
    padding: 25px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background-color: #f8fafc;
`;

export const SharedInstruction = styled.p`
    color: #2d3748 !important;
    font-weight: 700 !important;
    margin-bottom: 20px !important;
    font-size: 1.05em;

    strong {
        color: #2b6cb0;
        margin-right: 8px;
        background: #ebf8ff;
        padding: 2px 8px;
        border-radius: 6px;
    }
`;

export const SharedWordGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    background-color: #f1f5f9;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 25px;
`;

export const SharedWordBox = styled.span`
    background-color: #fff;
    color: #2d3748;
    padding: 10px 18px;
    border-radius: 25px;
    font-size: 0.95em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    font-weight: 500;
    border: 1px solid #e2e8f0;
    transition: transform 0.1s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const SharedArticleBox = styled.div`
    border: 1px solid #cbd5e0;
    padding: 25px;
    margin: 30px 0;
    border-radius: 8px;
    background-color: #fcfcfc;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);

    h4, h5 {
        text-align: center;
        font-size: 1.3em;
        margin-bottom: 20px;
        color: #1a202c;
        border-bottom: none !important;
    }
`;

export const SharedDialogueBubble = styled.div`
    background-color: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);

    p {
        margin: 0;
        line-height: 1.6;
    }
    
    strong {
        color: #2b6cb0;
    }
`;

export const SharedNoteCard = styled.div`
    background: #fffdf5;
    border-left: 6px solid #ecc94b;
    border-radius: 8px;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);

    h4 {
        color: #b7791f;
        margin-bottom: 15px;
        font-size: 1.2em;
        font-weight: 700;
        border-bottom: none !important;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
    }
`;

export const SharedRememberBox = styled.div`
    margin-top: 25px;
    padding: 20px;
    background: #f0fdf4;
    border-left: 5px solid #34d399;
    border-radius: 8px;

    h4 {
        color: #065f46;
        margin-bottom: 12px;
        font-weight: 700;
    }

    ul {
        list-style-type: disc;
        list-style-position: inside;
        padding-left: 5px;
        margin-bottom: 0;
    }
`;

export const SharedFlowChart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 35px 0;
`;

export const SharedFlowChartStep = styled.div`
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px 25px;
    width: 85%;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.04);

    h4 {
        margin-bottom: 12px;
        color: #1a202c;
        font-weight: 700;
    }
    
    p {
        margin: 0;
        color: #4a5568;
    }

    em {
        color: #718096;
        font-size: 0.9em;
        display: block;
        margin-top: 5px;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
    }
`;

export const SharedFlowChartArrow = styled.div`
    font-size: 2em;
    color: #cbd5e0;
    font-weight: bold;
`;
