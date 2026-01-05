
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
    AudioPlayerWrapper,
    InteractiveNodeContent,
    RevealPlaceholder
} from '../ui';

interface Unit5CommunicationProps {
    onBack: () => void;
}

const Unit5Communication: React.FC<Unit5CommunicationProps> = ({ onBack }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const [revealedNodes, setRevealedNodes] = useState<Record<string, boolean>>({});
    const [showDialogueAnswers, setShowDialogueAnswers] = useState(false);
    
    // States for Sample section
    const [showSampleSection, setShowSampleSection] = useState(false);
    const [activeSampleIndex, setActiveSampleIndex] = useState(0);

    const toggleCard = (index: number) => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleNode = (nodeId: string) => {
        setRevealedNodes(prev => ({
            ...prev,
            [nodeId]: true
        }));
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

    const samples = [
        {
            topic: "Advantages of streaming apps",
            content: [
                {
                    point: "Streaming apps are very convenient for listeners.",
                    reason: "Because people can listen to millions of songs quickly without using up space on their phones.",
                    example: "For instance, I can switch from pop songs to piano music on the bus using just my phone."
                },
                {
                    point: "It is a cheap way to listen to music.",
                    reason: "Since a small monthly fee is much cheaper than buying many CDs or single songs.",
                    example: "For example, for the price of one CD, I can listen to all the artists I like every month."
                }
            ]
        },
        {
            topic: "Disadvantages of streaming apps",
            content: [
                {
                    point: "Streaming needs a good internet connection.",
                    reason: "Since the music is played online, it might stop in places with poor network, like in tunnels.",
                    example: "In my experience, music often stops when I am hiking in the mountains."
                },
                {
                    point: "People do not really own the music.",
                    reason: "Because you only pay to listen; if you stop paying, you lose all your playlists.",
                    example: "Unlike a CD that I can keep forever, my streaming music would go away if I stopped the plan."
                }
            ]
        },
        {
            topic: "Impact on the music industry",
            content: [
                {
                    point: "Streaming has changed how singers earn money.",
                    reason: "The money for each play is very low, so it is hard for new or smaller artists to make a living.",
                    example: "I've read that a singer needs many plays to earn the same money as selling one CD."
                },
                {
                    point: "It changes how music is made and sold.",
                    reason: "Many songs are now shorter or have a catchy part at the start to make sure people don't skip.",
                    example: "For instance, many modern pop songs start the main part very early so people keep listening."
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
                    <NavTab 
                        key={index} 
                        active={currentStep === index}
                        onClick={() => setCurrentStep(index)}
                    >
                        {index + 1}. {step}
                    </NavTab>
                ))}
            </NavTabs>

            {currentStep === 0 && (
                <Section>
                    <h3>Stating your position</h3>
                    <p>In the exam, you might be asked to <strong>argue for or against an idea</strong>. In this case, you should say your position <strong>clearly</strong> during the talk.</p>
                    <p>Look at the table below:</p>
                    <Table>
                        <thead>
                            <tr>
                                <Th></Th>
                                <Th>When to do so</Th>
                                <Th>Expressions</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td><strong>Stating your position</strong></Td>
                                <Td>During your <strong>first</strong> turn</Td>
                                <Td>
                                    <ul>
                                        <li>I'm for/against the idea that ...</li>
                                        <li>I support/oppose the idea ...</li>
                                        <li>I (do not) believe that ...</li>
                                        <li>I (do not) agree that ...</li>
                                        <li>I (do not) think that ...</li>
                                        <li>In my experience, ...</li>
                                    </ul>
                                </Td>
                            </tr>
                            <tr>
                                <Td><strong>Restating your position</strong></Td>
                                <Td>
                                    <ul>
                                        <li>When you want to <strong>make your point stronger</strong></li>
                                        <li>When others <strong>do not understand you</strong></li>
                                    </ul>
                                </Td>
                                <Td>
                                    <ul>
                                        <li>As I said, ...</li>
                                        <li>Let me say that again.</li>
                                        <li>Once again, ...</li>
                                    </ul>
                                </Td>
                            </tr>
                            <tr>
                                <Td><strong>Changing your position</strong></Td>
                                <Td>When your group members have <strong>better ideas than you</strong></Td>
                                <Td>
                                    <ul>
                                        <li>I guess you're right. Maybe we should ...</li>
                                        <li>I've changed my mind. I guess ...</li>
                                        <li>You've made some good points. I now agree ...</li>
                                    </ul>
                                </Td>
                            </tr>
                        </tbody>
                    </Table>

                    <Exercise>
                        <Instruction><strong>C1</strong> These three students are talking about whether to protect the privacy of famous people. Decide if they are stating, restating or changing their positions.</Instruction>
                        <DialogueGrid>
                            <DialogueBubble><p><strong>As I've mentioned before,</strong> this law is not a good idea because it stops the news from telling the truth.</p></DialogueBubble>
                            <DialogueBubble><p><strong>I'm in favour of the proposal that</strong> a law should be made to protect the privacy of stars.</p></DialogueBubble>
                            <DialogueBubble><p><strong>Let me rethink my earlier position. I now think</strong> that the government should not pass this law.</p></DialogueBubble>
                        </DialogueGrid>
                    </Exercise>
                    <Exercise>
                        <Instruction><strong>C2</strong> Read the ideas below and decide if you are for or against them. In pairs, practice telling each other your position.</Instruction>
                        <PracticePointsContainer>
                            <PracticePointCard 
                                isFor={true} 
                                isExpanded={!!expanded[0]} 
                                onClick={() => toggleCard(0)}
                            >
                                <h4>🎵 1. Pop music should be taught in Music class. ✅</h4>
                                {!expanded[0] && <div className="click-hint">(Click to see ideas)</div>}
                                <p><strong>Point:</strong> "I agree that pop music should be taught in Music class."</p>
                                <p><strong>Reason:</strong> "Because pop music is very popular with students. It can make them more interested in learning and music culture."</p>
                                <p><strong>Example:</strong> "For example, teachers can use famous songs to teach music, which makes the lesson more fun."</p>
                            </PracticePointCard>
                            <PracticePointCard 
                                isFor={false} 
                                isExpanded={!!expanded[1]} 
                                onClick={() => toggleCard(1)}
                            >
                                <h4>🎬 2. Film Studies should be a school subject. ❌</h4>
                                {!expanded[1] && <div className="click-hint">(Click to see ideas)</div>}
                                <p><strong>Point:</strong> "I don’t think Film Studies should be a school subject."</p>
                                <p><strong>Reason:</strong> "Because it takes up too much time, and students already have a lot of homework from main subjects."</p>
                                <p><strong>Example:</strong> "For example, secondary students are very busy, so it is better to focus on English or Maths first."</p>
                            </PracticePointCard>
                            <PracticePointCard 
                                isFor={true} 
                                isExpanded={!!expanded[2]} 
                                onClick={() => toggleCard(2)}
                            >
                                <h4>📺 3. There should be more English TV channels in Hong Kong. ✅</h4>
                                {!expanded[2] && <div className="click-hint">(Click to see ideas)</div>}
                                <p><strong>Point:</strong> "I agree that there should be more English TV channels."</p>
                                <p><strong>Reason:</strong> "Because it gives people more chances to hear English and improve their skills naturally."</p>
                                <p><strong>Example:</strong> "For example, students can watch English movies or news at home to learn new words."</p>
                            </PracticePointCard>
                        </PracticePointsContainer>
                    </Exercise>
                </Section>
            )}

            {currentStep === 1 && (
                <Section>
                    <h3>Giving additional reasons</h3>
                    <p>After saying your position, you should give reasons. If you have more than one reason, use these words to add them:</p>
                    <ul>
                        <li>News articles are more reliable than social media. <strong>In addition,</strong> they are better researched.</li>
                        <li>Reading news helps you know what is happening. <strong>Moreover,</strong> it is a good way to learn English.</li>
                    </ul>
                    <p>You can also give more reasons to support what another student has said.</p>
                    <h4>These students are talking about whether they like reading news or listening to podcasts. See how they add reasons to each other's points.</h4>
                    <DialogueGrid>
                        <DialogueBubble>I like podcasts because I can do other things, like walking or cleaning, while I listen.</DialogueBubble>
                        <DialogueBubble><strong>Besides,</strong> it feels more personal to hear people talking than to read a long story.</DialogueBubble>
                        <DialogueBubble><strong>Also,</strong> many hosts recommend new shows, so there are more things to discover.</DialogueBubble>
                    </DialogueGrid>

                    <Exercise>
                        <Instruction><strong>C4</strong> You are talking about if children should work in entertainment. Here are some points for and against. In pairs, take turns to speak.</Instruction>
                        <PracticePointsContainer>
                            <PracticePointCard 
                                isFor={true} 
                                isExpanded={!!expanded[10]} 
                                onClick={() => toggleCard(10)}
                            >
                                <h4>✅ FOR 1 — Good Experience</h4>
                                {!expanded[10] && <div className="click-hint">(Click to see ideas)</div>}
                                <p><strong>Point:</strong> "I think working can be a good experience for children."</p>
                                <p><strong>Reason:</strong> "Because it helps them learn about the real world and build confidence."</p>
                                <p><strong>Example:</strong> "For example, child actors can learn to work in a team and speak in front of people."</p>
                            </PracticePointCard>
                            <PracticePointCard 
                                isFor={false} 
                                isExpanded={!!expanded[12]} 
                                onClick={() => toggleCard(12)}
                            >
                                <h4>❌ AGAINST 1 — Less School Time</h4>
                                {!expanded[12] && <div className="click-hint">(Click to see ideas)</div>}
                                <p><strong>Point:</strong> "I think child stars have less time for school."</p>
                                <p><strong>Reason:</strong> "Because they spend too much time filming, so they may miss lessons."</p>
                                <p><strong>Example:</strong> "For example, a child actor might travel for weeks and fall behind in class."</p>
                            </PracticePointCard>
                        </PracticePointsContainer>
                    </Exercise>
                    <Exercise>
                        <Instruction><strong>C5</strong> In the Group Interaction, you talk about illegal music/film streaming. Complete the mind map with your own ideas.</Instruction>
                        <MindMapContainer>
                            <MindMapNode className="top-left">
                                <p><strong>Legal Issues:</strong> Illegal streaming is against the law and is a crime in many places.</p>
                            </MindMapNode>
                            
                            <MindMapNode className="top-right" onClick={() => toggleNode('economic')}>
                                {revealedNodes['economic'] ? (
                                    <InteractiveNodeContent>
                                        <p><strong>Money Problems:</strong> It takes away money from artists and companies who work hard.</p>
                                    </InteractiveNodeContent>
                                ) : (
                                    <RevealPlaceholder>Click to see idea (经济影响)</RevealPlaceholder>
                                )}
                            </MindMapNode>

                            <MindMapCenter>Illegal streaming of films or music</MindMapCenter>

                            <MindMapNode className="bottom-left" onClick={() => toggleNode('security')}>
                                 {revealedNodes['security'] ? (
                                    <InteractiveNodeContent>
                                        <p><strong>Phone Safety:</strong> These sites often have viruses that can steal your information or break your phone.</p>
                                    </InteractiveNodeContent>
                                ) : (
                                    <RevealPlaceholder>Click to see idea (网络安全)</RevealPlaceholder>
                                )}
                            </MindMapNode>

                            <MindMapNode className="bottom-right" onClick={() => toggleNode('quality')}>
                                 {revealedNodes['quality'] ? (
                                    <InteractiveNodeContent>
                                        <p><strong>Bad Quality:</strong> It stops companies from making good films because they cannot make their money back.</p>
                                    </InteractiveNodeContent>
                                ) : (
                                    <RevealPlaceholder>Click to see idea (行业影响)</RevealPlaceholder>
                                )}
                            </MindMapNode>
                        </MindMapContainer>
                    </Exercise>
                    <Exercise>
                        <Instruction><strong>C6</strong> Talk about your ideas in pairs. Use these words to help you.</Instruction>
                        <DialogueGrid>
                             <DialogueBubble><p>I am against illegal streaming because it is against the law.</p></DialogueBubble>
                             <DialogueBubble><p><strong>Moreover,</strong> I would feel bad if the singers I like lost money because of me.</p></DialogueBubble>
                             <DialogueBubble><p><strong>In addition,</strong> artists deserve to be paid for their hard work.</p></DialogueBubble>
                        </DialogueGrid>
                    </Exercise>
                </Section>
            )}

            {currentStep === 2 && (
                <Section>
                    <h3>Using persuasive language</h3>
                    <p>During the talk, you should try to make others agree with you. Look at these examples.</p>
                    <DialogueGrid>
                         <DialogueBubble><p>Alcohol ads should <strong>definitely</strong> be banned.</p></DialogueBubble>
                         <DialogueBubble><p>Advertising should <strong>obviously</strong> be controlled more in Hong Kong.</p></DialogueBubble>
                    </DialogueGrid>
                    <Exercise>
                        <Instruction><strong>C7</strong> Use these adverbs to make your points stronger. See where they go in the sentence.</Instruction>
                        <WordGrid>
                            <WordBox>clearly</WordBox>
                            <WordBox>surely</WordBox>
                            <WordBox>undoubtedly</WordBox>
                        </WordGrid>
                        <SentenceList>
                            <li>Hip hop is, <strong>clearly</strong>, very popular with teens in Hong Kong.</li>
                            <li>Social media is <strong>undoubtedly</strong> more popular with young people.</li>
                            <li>For some teens, it is <strong>surely</strong> easier to make friends online than at school.</li>
                        </SentenceList>
                    </Exercise>
                    <RememberBox>
                        <h4>Remember</h4>
                        <ul>
                            <li>Look confident and <strong>use your hands</strong> when you talk. This helps people believe you.</li>
                            <li>If you disagree, be <strong>polite</strong>. Do not start a real fight or argument.</li>
                        </ul>
                    </RememberBox>
                </Section>
            )}

            {currentStep === 3 && (
                <Section>
                    <h3>Example Group Interaction</h3>
                    <InstructionBox>
                        <h4>GENERAL INSTRUCTIONS</h4>
                        <p>Part A: Group Interaction. You have 10 minutes to prepare and 8 minutes to talk.</p>
                    </InstructionBox>
                    <p style={{ margin: '15px 0' }}>This story appeared in a magazine:</p>
                    <ArticleBox>
                        <p>This new music app is 100% legal. It offers high-quality music and you can save songs to playlists. You can also share them with friends.</p>
                        <p>The app has over 10 million songs by famous pop stars and new musicians from all over the world.</p>
                        <p>The free version has ads, so your music will sometimes be stopped. You can pay a small fee every month to have no ads.</p>
                        <table>
                            <tbody>
                                <tr><td>Songs: ★★★☆☆</td><td>Price: ★★★★★</td></tr>
                                <tr><td>Variety: ★★★★☆</td><td>Support: ☆☆☆☆☆</td></tr>
                                <tr><td><strong>Overall: ★★★☆☆</strong></td><td></td></tr>
                            </tbody>
                        </table>
                    </ArticleBox>
                    <p>Your group talks about if it is a good idea to use streaming apps instead of downloading music. You may want to talk about:</p>
                    <ul>
                        <li>benefits of using streaming apps</li>
                        <li>problems with using streaming apps</li>
                        <li>how it has changed the music industry</li>
                    </ul>

                    {/* Sample Content Section */}
                    <SampleContainer>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4 style={{ margin: 0, color: '#2b6cb0' }}>💡 Simple Practice Samples (参考范例)</h4>
                            <button 
                                onClick={() => setShowSampleSection(!showSampleSection)}
                                style={{ 
                                    padding: '5px 15px', 
                                    backgroundColor: '#4299e1', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                {showSampleSection ? 'Close' : 'View Ideas'}
                            </button>
                        </div>
                        
                        {showSampleSection && (
                            <div style={{ animation: 'fadeIn 0.3s ease' }}>
                                <p style={{ fontSize: '0.9em', margin: '10px 0', color: '#4a5568' }}>Select a topic to see simple PRE (Point-Reason-Example) ideas:</p>
                                <SampleTabGroup>
                                    {samples.map((sample, idx) => (
                                        <SampleTabItem 
                                            key={sample.topic} 
                                            active={activeSampleIndex === idx}
                                            onClick={() => setActiveSampleIndex(idx)}
                                        >
                                            Topic {idx + 1}
                                        </SampleTabItem>
                                    ))}
                                </SampleTabGroup>
                                
                                <SampleContentBox>
                                    <h4 style={{ marginTop: 0, fontSize: '1.1em', color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                                        {samples[activeSampleIndex].topic}
                                    </h4>
                                    {samples[activeSampleIndex].content.map((item, cIdx) => (
                                        <PreSet key={cIdx}>
                                            <div className="pre-title"><span>PRE {cIdx + 1}</span> Idea:</div>
                                            <div className="pre-body">
                                                <p><span className="label">Point:</span> <strong>"{item.point}"</strong></p>
                                                <p><span className="label">Reason:</span> "{item.reason}"</p>
                                                <p><span className="label">Example:</span> "{item.example}"</p>
                                            </div>
                                        </PreSet>
                                    ))}
                                </SampleContentBox>
                            </div>
                        )}
                    </SampleContainer>

                    <Exercise>
                        <Instruction><strong>C9</strong> Fill in the talk below in groups of four. Then act it out.</Instruction>
                        
                        <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                            <button 
                                onClick={() => setShowDialogueAnswers(!showDialogueAnswers)}
                                style={{ 
                                    padding: '8px 15px', 
                                    backgroundColor: '#4a5568', 
                                    color: 'white', 
                                    border: 'none', 
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                {showDialogueAnswers ? 'Hide Answers' : 'Show Answers'}
                            </button>
                        </div>

                        <DialogueCompletion>
                            <DialogueLine>
                                <DialogueText>
                                    <p><strong>A:</strong> ... I support the idea of 
                                    {showDialogueAnswers ? <strong> using streaming apps instead of downloading music. </strong> : <span style={{ borderBottom: '1px solid #ccc', minWidth: '150px', display: 'inline-block' }}></span>} 
                                    </p>
                                </DialogueText>
                                <DialogueAction><p>Say your position</p></DialogueAction>
                            </DialogueLine>

                            <DialogueLine>
                                <DialogueText>
                                    <p>It's {showDialogueAnswers ? <strong>certainly</strong> : <span style={{ borderBottom: '1px dashed #ccc', minWidth: '60px', display: 'inline-block' }}></span>} more convenient because we can listen to any song without taking up space on our phones.</p>
                                </DialogueText>
                                <DialogueAction><p>Make the point stronger</p></DialogueAction>
                            </DialogueLine>

                             <DialogueLine>
                                <DialogueText>
                                    <p><strong>B:</strong> I see your point, but 
                                    {showDialogueAnswers ? <strong> I'm against </strong> : <span style={{ borderBottom: '1px solid #ccc', minWidth: '80px', display: 'inline-block' }}></span>} the idea. I'd rather listen to music with no ads than have to hear them on streaming apps.</p>
                                </DialogueText>
                                <DialogueAction><p>Against the idea</p></DialogueAction>
                            </DialogueLine>
                        </DialogueCompletion>
                    </Exercise>
                </Section>
            )}

            <PaginationControls>
                <PageButton disabled={currentStep === 0} onClick={prevStep}>
                    ← Previous
                </PageButton>
                <div style={{ color: '#718096', fontWeight: 'bold' }}>
                    Step {currentStep + 1} of {steps.length}
                </div>
                <PageButton disabled={currentStep === steps.length - 1} onClick={nextStep}>
                    Next →
                </PageButton>
            </PaginationControls>
        </CommunicationContainer>
    );
};

export default Unit5Communication;
