
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import {
    IdeasContainer,
    BackButton,
    Section,
    InstructionBox,
    ArticleBox,
    NoteTakingTips,
    PrepStructure,
    PrepStep,
    Exercise,
    Instruction,
    WordBank,
    Notecard,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    IndividualResponseList,
    SampleContainer,
    SampleTabGroup,
    SampleTabItem,
    SampleContentBox,
    PreSet,
    IRCardList,
    IRCard,
    IRFullAnswer,
    IRSectionHeader,
    IRParagraph,
    IRDivider
} from '../ui';

type Unit5IdeasAndOrganizationPage = 'ideas' | 'individual-response';

const Unit5IdeasAndOrganization: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [showSampleSection, setShowSampleSection] = useState(false);
    const [activeSampleIndex, setActiveSampleIndex] = useState(0);
    const [activeIRIndex, setActiveIRIndex] = useState<number | null>(null);
    const [page, setPage] = useState<Unit5IdeasAndOrganizationPage>('ideas');

    const irSamples = [
        {
            question: "Is it a good idea for teenagers to become idols?",
            intro: "I think becoming a teen idol is a good idea if the teenager is talented and ready to work hard.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it lets them follow their dreams early. Teens have a lot of energy to learn how to sing and dance. For example, many K-pop stars started young and became famous before they were twenty."
                },
                {
                    tag: "PRE 2",
                    text: "Second, it helps them build confidence. Performing on stage and meeting many people can make them more mature. I think teen idols are often very hard-working because they must manage their time well."
                }
            ],
            comparison: "Some people worry they might lose their childhood. But I believe having such a special experience is better than just sitting in a classroom all day.",
            conclusion: "That is why I think it is a great chance for talented teens."
        },
        {
            question: "Do you think teenagers should be banned from reality shows?",
            intro: "I do not think a total ban is needed. Instead, there should be rules to protect young people.",
            body: [
                {
                    tag: "PRE 1",
                    text: "One reason is that reality shows are a good way to show talent. Many talented teens from normal families do not have other ways to show their skills. For instance, singing contests have helped many teens become stars."
                },
                {
                    tag: "PRE 2",
                    text: "Also, these shows can teach teens about competition. They learn how to win and how to lose. For example, in many shows, we see contestants helping each other, which shows good teamwork."
                }
            ],
            comparison: "Others might say shows use kids for more views. While this is true, as long as parents and the government watch them closely, the benefits are more important.",
            conclusion: "To conclude, I believe having better rules is better than a total ban."
        },
        {
            question: "Are celebrities a good or bad influence on young people?",
            intro: "I believe celebrities can be a very good influence if young people choose the right people to follow.",
            body: [
                {
                    tag: "PRE 1",
                    text: "On the good side, many celebrities use their fame for good things. They can raise money for charity or help the environment. For example, some stars often help poor families, which inspires their fans to be kind."
                },
                {
                    tag: "PRE 2",
                    text: "Moreover, they show that hard work is important. Success needs years of practice. When students see how much effort a singer puts into a show, they might learn to work harder at school too."
                }
            ],
            comparison: "On the other hand, some people say celebrities show a rich and lazy life. However, I think if we teach students to think clearly, they will only follow the good parts.",
            conclusion: "This is why I believe celebrities are mostly a good influence."
        },
        {
            question: "What are the problems of becoming a star at a young age?",
            intro: "I can think of two main problems that young stars often face.",
            body: [
                {
                    tag: "PRE 1",
                    text: "The first problem is the lack of privacy. Young stars are always followed by cameras. For instance, they might not be able to go to the park or have dinner with friends without being filmed, which is very stressful."
                },
                {
                    tag: "PRE 2",
                    text: "The second problem is the big pressure. Everyone wants them to be perfect all the time. I see that many young stars feel worried because they are afraid that one mistake will end their job."
                }
            ],
            comparison: "Some people say they are rich and lucky. However, I think no amount of money can replace the freedom of a normal, quiet childhood.",
            conclusion: "These are the main problems, and they can hurt a young person's feelings."
        },
        {
            question: "What are the advantages of working in entertainment?",
            intro: "There are several good things for people who work in movies and music.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it lets you show your ideas. Working in this area lets you share your thoughts with many people. For example, a songwriter can make people feel happy just by writing a beautiful song."
                },
                {
                    tag: "PRE 2",
                    text: "Second, you can meet many talented people. You get to work with famous directors and actors. In my experience, working with different people can help you learn new things and make life more interesting."
                }
            ],
            comparison: "Others might think the job is not stable. While it is hard, the excitement and the chance to follow your dream are much higher than in a normal office job.",
            conclusion: "So, I believe the chance to be creative is the biggest advantage."
        }
    ];

    const singingSamples = [
        {
            topic: "How taking part in the contest could affect him",
            content: [
                {
                    point: "He could gain good stage experience and new skills.",
                    reason: "Because performing live every week builds confidence and teaches him how to handle large groups of people.",
                    example: "For instance, by hearing from the famous judges, Jordan can learn how to sing better."
                },
                {
                    point: "On the bad side, he might feel very stressed or sad.",
                    reason: "As the judges can be mean and critical, their harsh words could hurt his feelings in front of everyone.",
                    example: "For example, Mrs. Wong said that judges can hurt the confidence of young singers by being too mean."
                }
            ]
        },
        {
            topic: "How winning the contest could influence him",
            content: [
                {
                    point: "Winning would be a great start for his singing career.",
                    reason: "The winner gets a special one-year contract to make music with famous people.",
                    example: "Looking at last season's winner, Meg Lee, she became very famous and appeared in many magazines and TV shows."
                },
                {
                    point: "However, it could also mean he has no privacy.",
                    reason: "Becoming famous overnight makes a person a target for reporters and people watching them all the time.",
                    example: "Jordan might find it hard to go to school or meet friends if people are always asking for photos."
                }
            ]
        },
        {
            topic: "What concerns his parents might have",
            content: [
                {
                    point: "The biggest worry for his parents would be his school work.",
                    reason: "Jordan is only a teenager, and the show takes a lot of time to prepare for every week.",
                    example: "They might worry that Jordan will forget about his exams or homework while trying to be a star."
                },
                {
                    point: "They would also worry about his feelings.",
                    reason: "As a teen, Jordan might not be ready to handle mean judges or the pressure of losing on TV.",
                    example: "His parents might want to protect him because they fear failing in public could make him very unhappy."
                }
            ]
        }
    ];

    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Ideas and organization</h2>

            <SampleTabGroup style={{ marginBottom: '24px' }}>
                <SampleTabItem active={page === 'ideas'} onClick={() => setPage('ideas')}>
                    Page 1: Ideas and organization
                </SampleTabItem>
                <SampleTabItem
                    active={page === 'individual-response'}
                    onClick={() => setPage('individual-response')}
                >
                    Page 2: Individual Response
                </SampleTabItem>
            </SampleTabGroup>

            {page === 'ideas' ? (
                <>
                    <Section>
                        <h3>Identifying arguments in the input text</h3>
                        <p>In the speaking exam, you might be asked to discuss the arguments for and/or against an issue. Sometimes, understanding the different opinions and arguments presented in the input text can help you come up with ideas.</p>
                        <p>Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>Part A: Group Interaction. You have 10 minutes to prepare and 8 minutes to talk.</p>
                </InstructionBox>
                <ArticleBox>
                    <p>This story appeared in a local paper:</p>
                    <h4>Singers find fame on 'Hong Kong Idol'</h4>
                    <p>Good news for people over 16: you can now join 'Hong Kong Idol' and try to become a famous singer.</p>
                    <p>People on the show perform live on TV every week. They face a group of famous judges who can be very mean. TV viewers will also vote for their favorite. One person is removed in each episode.</p>
                    <p>For the singers, this is a great chance. The winner gets a special one-year contract to work with famous names. Meg Lee, who won last time, has appeared in many magazines and given interviews on TV.</p>
                    <p>However, not everyone likes it. 'The judges are so mean,' says Mrs Wong, a viewer. 'They really hurt the confidence of the young singers.'</p>
                </ArticleBox>
                <p>Your friend Jordan wants to join 'Hong Kong Idol'. Your group talks about if this is a good idea. You may want to talk about:</p>
                <ul>
                    <li>how the contest could affect him</li>
                    <li>how winning could change his life</li>
                    <li>what his parents might worry about</li>
                </ul>

                {/* Simple Sample Section for Part A */}
                <SampleContainer>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ margin: 0, color: '#2b6cb0' }}>💡 Simple Practice Samples (Part A 参考范例)</h4>
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
                        <div>
                            <p style={{ fontSize: '0.9em', margin: '15px 0 10px', color: '#4a5568' }}>Select a point to see simple PRE ideas:</p>
                            <SampleTabGroup>
                                {singingSamples.map((sample, idx) => (
                                    <SampleTabItem 
                                        key={sample.topic} 
                                        active={activeSampleIndex === idx}
                                        onClick={() => setActiveSampleIndex(idx)}
                                    >
                                        Point {idx + 1}
                                    </SampleTabItem>
                                ))}
                            </SampleTabGroup>
                            
                            <SampleContentBox>
                                <h4 style={{ marginTop: 0, fontSize: '1.1em', color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                                    {singingSamples[activeSampleIndex].topic}
                                </h4>
                                {singingSamples[activeSampleIndex].content.map((item, cIdx) => (
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
            </Section>

            <Section>
                <h3>Note-taking skills: organizing your points</h3>
                <p>When making notes for questions about arguing for or against, remember:</p>
                <NoteTakingTips>
                    <ul>
                        <li><strong>Make notes for both good and bad parts.</strong></li>
                        <li><strong>Mark your ideas clearly.</strong> Use tables, symbols and short words (e.g., ✓/✗, +/-).</li>
                        <li><strong>PREP.</strong> Use Point-Reason-Experience-Position to organize your thoughts.</li>
                    </ul>
                </NoteTakingTips>
                 <Exercise>
                    <Instruction><strong>D1</strong> Complete the notecard for the practice. Use these simple words:</Instruction>
                    <WordBank>
                        <strong>Taking part:</strong> try one's best, stage fright, audience, feedback, criticize, good experience
                        <br/>
                        <strong>Winning:</strong> prizes, fame, newspapers, famous, big chance, reporters, attention
                        <br/>
                        <strong>Parents:</strong> worry, protective, support, help, decision
                    </WordBank>
                    <Notecard />
                </Exercise>
            </Section>
            
                </>
            ) : (
                <>

            <Section>
                <h3>Individual Response: simple arguments</h3>
                <p>In the Individual Response, follow this simple flow to build your 1-minute answer.</p>
                <FlowChart>
                    <FlowChartStep>
                        <p>1. Say your position clearly</p>
                        <ul>
                            <li>I think it's a good/bad idea because ...</li>
                            <li>I can think of two main problems ...</li>
                            <li>There are some good things about ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>2. Give two simple points (use PRE)</p>
                         <ul>
                            <li>First, / Second, ...</li>
                            <li>One good/bad part is ...</li>
                            <li>Also, / In addition, ...</li>
                        </ul>
                        <p>3. Compare with the other side</p>
                         <ul>
                            <li>Some people say ... but I think ...</li>
                            <li>Others might think ... however ...</li>
                        </ul>
                    </FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep>
                        <p>4. End your answer</p>
                        <ul>
                            <li>This is why I think ...</li>
                            <li>These are the points I can think of.</li>
                        </ul>
                    </FlowChartStep>
                </FlowChart>

                <div style={{ marginTop: '40px' }}>
                    <h3 style={{ borderBottom: '2px solid #6b46c1', color: '#6b46c1' }}>🎤 Individual Response Practice (Simple Samples)</h3>
                    <p>Click a question to see a simple model answer (Intro → PRE Ideas → Compare → Conclusion).</p>
                    
                    <IRCardList>
                        {irSamples.map((sample, index) => (
                            <div key={index}>
                                <IRCard 
                                    active={activeIRIndex === index} 
                                    onClick={() => setActiveIRIndex(activeIRIndex === index ? null : index)}
                                >
                                    <p>{index + 1}. {sample.question}</p>
                                    <span>▶</span>
                                </IRCard>
                                {activeIRIndex === index && (
                                    <IRFullAnswer>
                                        <IRSectionHeader color="#4299e1">Step 1: Intro</IRSectionHeader>
                                        <IRParagraph>
                                            <span className="meta-tag">[Position]</span>
                                            {sample.intro}
                                        </IRParagraph>
                                        
                                        <IRDivider />
                                        <IRSectionHeader color="#48bb78">Step 2: Ideas</IRSectionHeader>
                                        {sample.body.map((b, bIdx) => (
                                            <IRParagraph key={bIdx}>
                                                <span className="meta-tag">[{b.tag}]</span>
                                                {b.text}
                                            </IRParagraph>
                                        ))}

                                        <IRDivider />
                                        <IRSectionHeader color="#f6ad55">Step 3: Compare</IRSectionHeader>
                                        <IRParagraph>
                                            <span className="meta-tag">[Compare]</span>
                                            {sample.comparison}
                                        </IRParagraph>

                                        <IRDivider />
                                        <IRSectionHeader color="#a0aec0">Step 4: End</IRSectionHeader>
                                        <IRParagraph>
                                            <span className="meta-tag">[Conclusion]</span>
                                            {sample.conclusion}
                                        </IRParagraph>
                                    </IRFullAnswer>
                                )}
                            </div>
                        ))}
                    </IRCardList>
                </div>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <Notecard>
                    <h4 style={{textAlign: 'center', width: '100%', marginBottom: '15px'}}>Notecard</h4>
                    <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Taking part in the contest</p>
                    <br/><br/>
                    <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Winning the contest</p>
                    <br/><br/>
                    <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Parents' worries</p>
                </Notecard>
                <br/>
                <h4>Part B Individual Response</h4>
                <p> examiner asks you questions for 1 minute. Try these:</p>
                <IndividualResponseList>
                    <li>Do you like talent shows?</li>
                    <li>Should celebrities be role models for kids?</li>
                    <li>What advice would you give to a friend joining a contest?</li>
                    <li>Do you like listening to music on your phone or at a show?</li>
                    <li>Why do young people want to be YouTube stars?</li>
                </IndividualResponseList>
            </Section>
                </>
            )}
        </IdeasContainer>
    );
};

export default Unit5IdeasAndOrganization;
