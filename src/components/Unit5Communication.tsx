
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import {
    CommunicationContainer,
    BackButton,
    Section,
    Table,
    Th,
    Td,
    Exercise,
    Instruction,
    DialogueGrid,
    DialogueBubble,
    SentenceList,
    PracticePointsContainer,
    PracticePointCard,
    MindMapContainer,
    MindMapCenter,
    MindMapNode,
    WordGrid,
    WordBox,
    RememberBox,
    InstructionBox,
    ArticleBox,
    DialogueCompletion,
    DialogueLine,
    DialogueText,
    DialogueAction,
    NavTabs,
    NavTab,
    PaginationControls,
    PageButton,
    SampleContainer,
    SampleTabGroup,
    SampleTabItem,
    SampleContentBox,
    PreSet,
    AudioPlayerWrapper
} from './Unit5Communication.styles';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const InteractiveNodeContent = styled.div`
    animation: ${fadeIn} 0.4s ease-out;
`;

const RevealPlaceholder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 80px;
    color: #a0aec0;
    font-style: italic;
    font-size: 0.9em;
    text-align: center;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #4299e1;
    }
`;

const PerspectiveToggle = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
`;

const PerspectiveButton = styled.button<{ active: boolean; isFor: boolean }>`
    padding: 6px 12px;
    border-radius: 15px;
    border: 1px solid ${props => props.isFor ? '#34d399' : '#f87171'};
    background: ${props => props.active ? (props.isFor ? '#34d399' : '#f87171') : 'transparent'};
    color: ${props => props.active ? 'white' : (props.isFor ? '#059669' : '#dc2626')};
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const ContentBox = styled.div`
    animation: ${fadeIn} 0.3s ease-out;
`;

interface Unit5CommunicationProps {
    onBack: () => void;
}

const Unit5Communication: React.FC<Unit5CommunicationProps> = ({ onBack }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const [revealedNodes, setRevealedNodes] = useState<Record<string, boolean>>({});
    const [showDialogueAnswers, setShowDialogueAnswers] = useState(false);
    
    // 控制每个题目当前显示的观点
    const [perspectives, setPerspectives] = useState<Record<number, 'for' | 'against'>>({
        0: 'for', 1: 'against', 2: 'for', 3: 'against'
    });

    const [showSampleSection, setShowSampleSection] = useState(false);
    const [activeSampleIndex, setActiveSampleIndex] = useState(0);

    const toggleCard = (index: number) => {
        setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const setView = (cardIndex: number, view: 'for' | 'against') => {
        setPerspectives(prev => ({ ...prev, [cardIndex]: view }));
    };

    const toggleNode = (nodeId: string) => {
        setRevealedNodes(prev => ({ ...prev, [nodeId]: true }));
    };

    const steps = [
        "Stating your position",
        "Giving additional reasons",
        "Using persuasive language",
        "Example Group Interaction"
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const topicData = [
        {
            id: 0,
            title: "1. Pop music should be taught in Music class. ✅",
            for: {
                point: "I strongly agree that pop music should be included in the Music curriculum.",
                reason: "It makes learning much more engaging and relatable for students compared to focusing only on classical music.",
                example: "For instance, analyzing the lyrics and rhythm of a popular Taylor Swift song can help students understand poetic devices and modern songwriting techniques in a fun way."
            },
            against: {
                point: "I disagree with the idea of teaching pop music in Music class.",
                reason: "I believe Music class should focus on fundamental music theory and classical history, which provide a stronger technical foundation.",
                example: "For example, learning about Beethoven's symphonies allows students to appreciate complex harmony and instrumentation that simple pop songs often lack."
            }
        },
        {
            id: 1,
            title: "2. Film Studies should be made available as a secondary school subject. ❌",
            for: {
                point: "I am in favour of making Film Studies a formal secondary school subject.",
                reason: "Visual literacy is a crucial skill in the digital age, helping us critically analyze the media messages we consume every day.",
                example: "For example, by studying camera angles and lighting, students can learn how directors influence an audience's emotions and perspective."
            },
            against: {
                point: "I oppose the introduction of Film Studies as a formal secondary school subject.",
                reason: "Our current DSE syllabus is already very crowded, and adding a new elective would put too much academic pressure on students.",
                example: "Most secondary students already spend over 10 hours a day on core subjects; they simply don't have enough time or energy for another examined subject."
            }
        },
        {
            id: 2,
            title: "3. There should be more English-language TV channels in Hong Kong. ✅",
            for: {
                point: "I believe there should be more English-language TV channels available in Hong Kong.",
                reason: "It would create a better language environment for citizens to practice their listening skills outside of the classroom naturally.",
                example: "In my experience, watching English news or sitcoms daily helped me pick up natural slang and improved my native-like pronunciation significantly."
            },
            against: {
                point: "I don't think adding more English-language TV channels is necessary for Hong Kong.",
                reason: "Most young people today prefer using online streaming platforms like Netflix or YouTube to watch English content instead of traditional broadcast TV.",
                example: "Statistics show that traditional TV viewership is declining, so investing public resources into more broadcast channels would be quite wasteful."
            }
        },
        {
            id: 3,
            title: "4. Music and film reviews should be included in the school magazine. ❌",
            for: {
                point: "I support the inclusion of music and film reviews in our school magazine.",
                reason: "It provides a platform for students to voice their opinions and encourages critical thinking about popular culture within the school community.",
                example: "A well-written review of a local indie film could spark meaningful discussions among classmates during recess about creativity and art."
            },
            against: {
                point: "I disagree with including entertainment reviews in the school magazine.",
                reason: "The magazine should prioritize academic achievements and reports on school events to maintain a professional and school-focused purpose.",
                example: "For instance, the limited space in the magazine would be better used to report on the school's sports day or charity events which involve more students."
            }
        }
    ];

    const samples = [
        {
            topic: "Advantages of streaming apps",
            content: [
                {
                    point: "Streaming apps offer unparalleled convenience for listeners.",
                    reason: "Because users can access millions of tracks instantly anywhere without using up physical storage on their devices.",
                    example: "For instance, I can switch from a pop playlist to a classical album while on the bus using just my smartphone."
                }
            ]
        },
        {
            topic: "Disadvantages of streaming apps",
            content: [
                {
                    point: "Streaming relies heavily on a stable internet connection.",
                    reason: "As the music is not stored locally, users might face buffering or interruptions in areas with poor network coverage.",
                    example: "In my experience, music often stops when I am travelling through tunnels or remote hiking trails."
                }
            ]
        }
    ];

    return (
        <CommunicationContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Communication strategies</h2>

            <NavTabs>
                {steps.map((step, index) => (
                    <NavTab key={index} active={currentStep === index} onClick={() => setCurrentStep(index)}>
                        {index + 1}. {step}
                    </NavTab>
                ))}
            </NavTabs>

            {currentStep === 0 && (
                <Section>
                    <h3>Stating your position</h3>
                    <p>In the exam, you might be asked to <strong>argue either for or against a position</strong>. It is a good idea to state your position <strong>clearly</strong>.</p>
                    
                    <Table>
                        <thead>
                            <tr><Th>Type</Th><Th>When to use</Th><Th>Expressions</Th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td><strong>Stating</strong></Td>
                                <Td>1st turn</Td>
                                <Td>I'm for/against... / I support/oppose...</Td>
                            </tr>
                            <tr>
                                <Td><strong>Changing</strong></Td>
                                <Td>When convinced</Td>
                                <Td>I've changed my mind. / You've convinced me.</Td>
                            </tr>
                        </tbody>
                    </Table>

                    <Exercise>
                        <Instruction><strong>C2</strong> Practice stating your position. Choose "Agree" or "Disagree" for each topic to see the PRE points.</Instruction>
                        <PracticePointsContainer>
                            {topicData.map((topic) => (
                                <PracticePointCard 
                                    key={topic.id}
                                    isFor={perspectives[topic.id] === 'for'} 
                                    isExpanded={!!expanded[topic.id]} 
                                    onClick={() => toggleCard(topic.id)}
                                >
                                    <h4>{topic.title}</h4>
                                    {!expanded[topic.id] && <div className="click-hint">(Click to view reference points)</div>}
                                    
                                    {expanded[topic.id] && (
                                        <ContentBox onClick={(e) => e.stopPropagation()}>
                                            <PerspectiveToggle>
                                                <PerspectiveButton 
                                                    active={perspectives[topic.id] === 'for'} 
                                                    isFor={true}
                                                    onClick={() => setView(topic.id, 'for')}
                                                >
                                                    ✅ Agree (赞成)
                                                </PerspectiveButton>
                                                <PerspectiveButton 
                                                    active={perspectives[topic.id] === 'against'} 
                                                    isFor={false}
                                                    onClick={() => setView(topic.id, 'against')}
                                                >
                                                    ❌ Disagree (反对)
                                                </PerspectiveButton>
                                            </PerspectiveToggle>

                                            {perspectives[topic.id] === 'for' ? (
                                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                                                    <p><strong>Point:</strong> "{topic.for.point}"</p>
                                                    <p><strong>Reason:</strong> "{topic.for.reason}"</p>
                                                    <p><strong>Example:</strong> "{topic.for.example}"</p>
                                                </div>
                                            ) : (
                                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                                                    <p><strong>Point:</strong> "{topic.against.point}"</p>
                                                    <p><strong>Reason:</strong> "{topic.against.reason}"</p>
                                                    <p><strong>Example:</strong> "{topic.against.example}"</p>
                                                </div>
                                            )}
                                        </ContentBox>
                                    )}
                                </PracticePointCard>
                            ))}
                        </PracticePointsContainer>
                    </Exercise>
                </Section>
            )}

            {currentStep === 1 && (
                <Section>
                    <h3>Giving additional reasons</h3>
                    <p>Support your position with multiple reasons using transitions like <strong>Moreover</strong> or <strong>Besides</strong>.</p>
                    <DialogueGrid>
                        <DialogueBubble>I prefer podcasts because I can multi-task.</DialogueBubble>
                        <DialogueBubble><strong>Besides,</strong> it feels more personal than reading an article.</DialogueBubble>
                    </DialogueGrid>
                    <Exercise>
                        <Instruction><strong>C5</strong> Discuss illegal streaming. Click to reveal hidden arguments.</Instruction>
                        <MindMapContainer>
                            <MindMapNode className="top-left">
                                <p><strong>Legal Issues:</strong> It's against copyright laws and is a criminal offence.</p>
                            </MindMapNode>
                            <MindMapNode className="top-right" onClick={() => toggleNode('economic')}>
                                {revealedNodes['economic'] ? <p><strong>Economic:</strong> Deprives artists of their hard-earned income.</p> : <RevealPlaceholder>Click for Economic Impact</RevealPlaceholder>}
                            </MindMapNode>
                            <MindMapCenter>Illegal Streaming</MindMapCenter>
                            <MindMapNode className="bottom-left" onClick={() => toggleNode('security')}>
                                {revealedNodes['security'] ? <p><strong>Security:</strong> Sites may contain malware and viruses.</p> : <RevealPlaceholder>Click for Cyber Security</RevealPlaceholder>}
                            </MindMapNode>
                            <MindMapNode className="bottom-right" onClick={() => toggleNode('quality')}>
                                {revealedNodes['quality'] ? <p><strong>Industry:</strong> Discourages production of high-quality content.</p> : <RevealPlaceholder>Click for Industry Impact</RevealPlaceholder>}
                            </MindMapNode>
                        </MindMapContainer>
                    </Exercise>
                </Section>
            )}

            {currentStep === 2 && (
                <Section>
                    <h3>Using persuasive language</h3>
                    <p>Use adverbs like <strong>definitely</strong> or <strong>undoubtedly</strong> to sound more confident.</p>
                    <SentenceList>
                        <li>Hip hop is, <strong>clearly</strong>, very popular with teens in Hong Kong.</li>
                        <li>Some social media are, <strong>unquestionably</strong>, more popular than others.</li>
                    </SentenceList>
                    <RememberBox>
                        <h4>Remember</h4>
                        <ul>
                            <li>Use hand gestures and keep eye contact.</li>
                            <li>Disagree respectfully without turning it into an argument.</li>
                        </ul>
                    </RememberBox>
                </Section>
            )}

            {currentStep === 3 && (
                <Section>
                    <h3>Example Group Interaction</h3>
                    <ArticleBox>
                        <h4>Music Streaming App Review</h4>
                        <p>Discuss replacing downloaded music with streaming apps.</p>
                        <table>
                            <tbody>
                                <tr><td>Songs: ★★★☆☆</td><td>Price: ★★★★★</td></tr>
                            </tbody>
                        </table>
                    </ArticleBox>

                    <SampleContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4 style={{ margin: 0, color: '#2b6cb0' }}>💡 Model PRE Samples</h4>
                            <button onClick={() => setShowSampleSection(!showSampleSection)} style={{ padding: '5px 15px', background: '#4299e1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                {showSampleSection ? 'Close' : 'View Ideas'}
                            </button>
                        </div>
                        {showSampleSection && (
                            <SampleContentBox>
                                {samples[activeSampleIndex].content.map((item, idx) => (
                                    <PreSet key={idx}>
                                        <div className="pre-title"><span>Sample</span> {samples[activeSampleIndex].topic}</div>
                                        <div className="pre-body">
                                            <p><strong>Point:</strong> "{item.point}"</p>
                                            <p><em>Reason:</em> {item.reason}</p>
                                            <p><em>Example:</em> {item.example}</p>
                                        </div>
                                    </PreSet>
                                ))}
                            </SampleContentBox>
                        )}
                    </SampleContainer>

                    <DialogueCompletion>
                         <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                            <button onClick={() => setShowDialogueAnswers(!showDialogueAnswers)} style={{ padding: '8px 15px', background: '#4a5568', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                {showDialogueAnswers ? 'Hide Answers' : 'Show Answers'}
                            </button>
                        </div>
                        <DialogueLine>
                            <DialogueText><strong>A:</strong> ... I support the idea of {showDialogueAnswers ? "replacing downloads." : "_______"}</DialogueText>
                            <DialogueAction><p>Stating position</p></DialogueAction>
                        </DialogueLine>
                    </DialogueCompletion>
                </Section>
            )}

            <PaginationControls>
                <PageButton disabled={currentStep === 0} onClick={prevStep}>← Previous</PageButton>
                <div style={{ color: '#718096', fontWeight: 'bold' }}>Step {currentStep + 1} of {steps.length}</div>
                <PageButton disabled={currentStep === steps.length - 1} onClick={nextStep}>Next →</PageButton>
            </PaginationControls>
        </CommunicationContainer>
    );
};

export default Unit5Communication;
