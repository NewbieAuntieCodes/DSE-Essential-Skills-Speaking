
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
    HighlightedText,
    CheckboxLabel,
    DialogueGrid,
    DialogueBubble,
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
    IRDivider,
    NavTabs,
    NavTab,
    PaginationControls,
    PageButton
} from './Unit5IdeasAndOrganization.styles';

const Unit5IdeasAndOrganization: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [showSampleSection, setShowSampleSection] = useState(false);
    const [activeSampleIndex, setActiveSampleIndex] = useState(0);
    const [activeIRIndex, setActiveIRIndex] = useState<number | null>(null);

    const steps = [
        "Group Interaction",
        "Individual Response"
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

    const irSamples = [
        {
            question: "Is it a good idea for teenagers to become idols?",
            intro: "In my opinion, becoming a teen idol is a good idea if the teenager is truly talented and ready for hard work.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it allows them to follow their dreams early. Teenagers have a lot of energy to learn skills like singing and dancing. For example, many K-pop stars started training young and became very successful before they turned twenty."
                },
                {
                    tag: "PRE 2",
                    text: "Second, it helps them build confidence. Performing on stage and meeting many people can make a person more mature. From what I see, teen idols are often more disciplined than other students because they have to manage their time well."
                }
            ],
            comparison: "Some people worry that they might lose their childhood. However, I believe that having such a unique experience is more valuable than just sitting in a classroom all day.",
            conclusion: "That is why I think it is a great opportunity for talented teens."
        },
        {
            question: "Do you think teenagers should be banned from participating in reality shows?",
            intro: "I do not think a total ban is necessary. Instead, I think there should be clear rules to protect young people.",
            body: [
                {
                    tag: "PRE 1",
                    text: "One reason is that reality shows are a good platform for talent. Many gifted teens from normal families do not have a way to show their skills. For instance, singing contests have helped many teenagers become famous stars without needing special connections."
                },
                {
                    tag: "PRE 2",
                    text: "Also, these shows can teach teens about competition. They learn how to win and how to handle losing. For example, in many shows, we see contestants helping each other, which shows good sportsmanship and teamwork."
                }
            ],
            comparison: "Others might argue that shows use kids for views. While this is a risk, as long as parents and the government watch them closely, the benefits of growth are more important.",
            conclusion: "To conclude, I believe better rules are better than a flat ban."
        },
        {
            question: "Are celebrities a good or bad influence on young people?",
            intro: "I believe celebrities can be a very positive influence if young people choose the right role models to follow.",
            body: [
                {
                    tag: "PRE 1",
                    text: "On the positive side, many celebrities use their fame for good causes. They can raise money for charity or help the environment. For example, some stars often donate to poor families, which inspires their fans to be more kind and helpful."
                },
                {
                    tag: "PRE 2",
                    text: "Moreover, they show the importance of hard work. Success in the entertainment world needs years of practice. When students see how much effort a singer puts into a concert, they might learn to work harder at school too."
                }
            ],
            comparison: "On the other hand, some people say celebrities promote a rich and lazy lifestyle. However, I think if we teach students to think critically, they will only follow the good traits.",
            conclusion: "This is why I believe celebrities are mostly a good influence."
        },
        {
            question: "What are the problems of becoming a star at a young age?",
            intro: "I can think of two main problems that young stars often face when they become famous too early.",
            body: [
                {
                    tag: "PRE 1",
                    text: "The first problem is the lack of privacy. Young stars are always followed by cameras and fans. For instance, they might not be able to go to the park or have dinner with friends without being filmed, which is very stressful."
                },
                {
                    tag: "PRE 2",
                    text: "The second problem is the huge pressure. Everyone expects them to be perfect all the time. In my observation, many young celebrities feel very anxious because they are afraid that one small mistake will end their career."
                }
            ],
            comparison: "Some people argue that they are rich and lucky. However, I think no amount of money can replace the freedom and happiness of a normal, quiet childhood.",
            conclusion: "These are the major problems, and they can hurt a young person's mental health."
        },
        {
            question: "What are the advantages of working in the entertainment industry?",
            intro: "There are several great advantages for people who choose to work in the world of movies and music.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it offers a way to express yourself. Working in the industry allows you to share your ideas with millions of people. For example, a songwriter can make people feel happy or inspired just by writing a beautiful song."
                },
                {
                    tag: "PRE 2",
                    text: "Second, you can meet many talented people. You get to work with creative directors and famous actors. In my experience, collaborating with different people can help you learn new things and make your life more interesting."
                }
            ],
            comparison: "Others might think the job is not stable. While it is competitive, the excitement and the chance to follow your passion are much higher than in a normal office job.",
            conclusion: "So, I believe the creative freedom is the biggest advantage."
        },
        {
            question: "Are there any disadvantages of participating in a reality show?",
            intro: "I believe there are some serious disadvantages that people should think about before joining a reality TV show.",
            body: [
                {
                    tag: "PRE 1",
                    text: "One big drawback is the 'bad editing'. Producers often change the video to create drama. For instance, they might show a contestant being angry but hide the reason why, making the person look like a villain to the public."
                },
                {
                    tag: "PRE 2",
                    text: "Another problem is cyberbullying. Once you are on TV, many people will judge you online. I have heard about participants who felt very sad and depressed because of the mean comments they received on social media."
                }
            ],
            comparison: "Some people say any fame is good. However, when that fame leads to stress or a bad reputation, I think the price is simply too high for most people.",
            conclusion: "These are the main disadvantages that contestants should be careful about."
        },
        /* Group 2: Exam Practice Samples (8 items) */
        {
            question: "Do you think the growing popularity of talent shows is a positive trend?",
            intro: "I definitely think the rising popularity of talent shows is a positive trend for our society.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it provides a fair stage for ordinary people to show their gifts. In the past, only those with connections could become famous. For example, shows like 'Hong Kong Idol' allow a student from a normal school to reach millions of viewers and get a record deal."
                },
                {
                    tag: "PRE 2",
                    text: "Second, it encourages the public to pursue their hobbies and passions. Watching others work hard for their dreams is very inspiring. From my observation, many of my friends started learning musical instruments after watching these shows."
                }
            ],
            comparison: "Some critics say these shows are too commercial and focus on drama. While that is true, I think the entertainment value and the opportunities they create for talent outweigh these flaws.",
            conclusion: "Overall, talent shows are a beneficial development in the media industry."
        },
        {
            question: "Should celebrities be viewed as role models for young people?",
            intro: "I believe that celebrities can be excellent role models, but young people must choose them wisely.",
            body: [
                {
                    tag: "PRE 1",
                    text: "One reason is that many celebrities use their influence for social good. They often lead charity campaigns or environmental efforts. For instance, some famous actors donate millions to build schools, teaching us the importance of being selfless."
                },
                {
                    tag: "PRE 2",
                    text: "Also, they represent the reward of perseverance. Becoming a top star requires years of dedication. When students see a singer practicing for months for one concert, it can motivate them to work harder at their own studies."
                }
            ],
            comparison: "On the other hand, some people argue that stars with bad habits set a poor example. However, I think parents can guide children to follow only the positive traits of celebrities.",
            conclusion: "To conclude, celebrities are powerful role models if we follow their hard work and kindness."
        },
        {
            question: "Should celebrities comment on political or social situations?",
            intro: "In my view, celebrities have the right to speak up about social and political issues, as they are citizens too.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, their voice can raise awareness for important causes very quickly. Because they have millions of followers, a simple post can bring global attention to an issue. For example, during climate change protests, celebrity support helped mobilize millions of young people."
                },
                {
                    tag: "PRE 2",
                    text: "Second, it encourages young fans to think about the world around them. Celebrities speaking on social issues can make politics seem more relevant to teenagers. In my experience, I only started reading about animal rights because my favorite singer mentioned it."
                }
            ],
            comparison: "Others might argue that celebrities are not experts and might spread wrong ideas. While this is a concern, I believe everyone should have freedom of speech regardless of their profession.",
            conclusion: "That is why I think celebrity voices are a valuable part of public discussion."
        },
        {
            question: "What advice would you give to a friend who is participating in a singing contest for the first time?",
            intro: "If my friend were joining a singing contest, I would give them two main pieces of advice to help them stay confident.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, I would tell them to focus on the experience rather than the result. Contests are great for learning, not just for winning. For instance, I would suggest they enjoy every moment on stage because that memory is more lasting than a trophy."
                },
                {
                    tag: "PRE 2",
                    text: "Second, they should prepare for both praise and criticism. Not everyone will like their style, and that is okay. From what I have seen, the most successful contestants are those who can take feedback from judges without losing their self-esteem."
                }
            ],
            comparison: "My friend might be very nervous about making mistakes. However, I would remind them that even professional singers make mistakes sometimes; what matters is how you recover.",
            conclusion: "Overall, I would tell my friend to be brave and just have fun."
        },
        {
            question: "Do you prefer to listen to music on your phone or watch a live performance?",
            intro: "I personally prefer watching a live performance because of the unique atmosphere and energy it provides.",
            body: [
                {
                    tag: "PRE 1",
                    text: "The main reason is the emotional connection you feel in a concert hall. You are sharing the music with thousands of other people. For example, singing along with a crowd at a stadium is an incredible feeling that you just can't get at home."
                },
                {
                    tag: "PRE 2",
                    text: "Also, you can see the artist's real emotions and skills up close. A live show is authentic and unedited. In my experience, seeing a violinist's effort and passion on stage makes the music much more powerful than a digital recording."
                }
            ],
            comparison: "Some might say listening on a phone is more convenient and cheaper. While I agree it's good for daily life, I believe a live show is a special event that is worth the extra time and money.",
            conclusion: "Therefore, nothing can truly replace the magic of live music."
        },
        {
            question: "Why do young people want to become YouTube stars?",
            intro: "There are several reasons why many young people today dream of becoming famous on YouTube.",
            body: [
                {
                    tag: "PRE 1",
                    text: "First, it offers a high level of creative freedom. You can make videos about anything you like, from gaming to cooking. For instance, many successful YouTubers started by just filming their hobbies in their bedrooms without any boss telling them what to do."
                },
                {
                    tag: "PRE 2",
                    text: "Second, the potential for fame and money is very attractive. Seeing young creators travel the world and earn a high income is very tempting. In my observation, teenagers see YouTube as a way to escape a boring 9-to-5 office job in the future."
                }
            ],
            comparison: "Others might think it's an easy way to get rich. However, I know that most creators work extremely long hours to edit videos, and very few actually reach the top.",
            conclusion: "So, the combination of passion and the dream of success is what drives them."
        },
        {
            question: "How would you feel if you entered the entertainment industry at a young age?",
            intro: "If I entered the entertainment industry as a teenager, I think I would feel a mix of excitement and great anxiety.",
            body: [
                {
                    tag: "PRE 1",
                    text: "On one hand, I would be excited about the chance to travel and meet talented people. It would be a dream come true to perform for others. For example, getting to work on a real movie set would be much more interesting than my normal school life."
                },
                {
                    tag: "PRE 2",
                    text: "On the other hand, I would feel worried about losing my privacy. Being recognized everywhere would be very stressful. From what I have read about child stars, they often feel lonely because they can't have a normal social life with friends their age."
                }
            ],
            comparison: "Some people argue that fame makes up for everything. However, I believe that mental health and a peaceful childhood are more important than being famous.",
            conclusion: "In short, I would feel lucky for the opportunity but very scared of the pressure."
        },
        {
            question: "Should social media influencers be required to say if a post is sponsored?",
            intro: "I strongly believe that social media influencers must be required by law to disclose when a post is sponsored.",
            body: [
                {
                    tag: "PRE 1",
                    text: "The primary reason is to protect consumers from being misled. We have a right to know if someone is being paid to say something good about a product. For instance, if an influencer says a skincare product works perfectly but doesn't mention it's an ad, young fans might waste money on something that doesn't actually work."
                },
                {
                    tag: "PRE 2",
                    text: "Also, transparency builds trust between influencers and their audience. When creators are honest about their partnerships, they look more professional. In my experience, I trust an influencer more if they use a clear '#ad' tag because it shows they are being honest with me."
                }
            ],
            comparison: "Some influencers argue that 'sponsored' tags make their content look less authentic. However, I believe that honesty is the most important part of any recommendation, especially for young followers.",
            conclusion: "That is why strict rules on sponsored content are necessary for a fair digital market."
        }
    ];

    // Helper to render a list of interactive cards
    const renderInteractiveCards = (startIndex: number, endIndex: number) => (
        <IRCardList>
            {irSamples.slice(startIndex, endIndex).map((sample, relativeIndex) => {
                const absoluteIndex = startIndex + relativeIndex;
                return (
                    <div key={absoluteIndex}>
                        <IRCard 
                            active={activeIRIndex === absoluteIndex} 
                            onClick={() => setActiveIRIndex(activeIRIndex === absoluteIndex ? null : absoluteIndex)}
                        >
                            <p>{relativeIndex + 1}. {sample.question}</p>
                            <span>▶</span>
                        </IRCard>
                        {activeIRIndex === absoluteIndex && (
                            <IRFullAnswer>
                                <IRSectionHeader color="#4299e1">Step 1: Introduction</IRSectionHeader>
                                <IRParagraph>
                                    <span className="meta-tag">[Position]</span>
                                    {sample.intro}
                                </IRParagraph>
                                
                                <IRDivider />
                                <IRSectionHeader color="#48bb78">Step 2: Main Speech (Arguments)</IRSectionHeader>
                                {sample.body.map((b, bIdx) => (
                                    <IRParagraph key={bIdx}>
                                        <span className="meta-tag">[{b.tag}]</span>
                                        {b.text}
                                    </IRParagraph>
                                ))}

                                <IRDivider />
                                <IRSectionHeader color="#f6ad55">Step 3: Compare with other side</IRSectionHeader>
                                <IRParagraph>
                                    <span className="meta-tag">[Comparison]</span>
                                    {sample.comparison}
                                </IRParagraph>

                                <IRDivider />
                                <IRSectionHeader color="#a0aec0">Step 4: End your response</IRSectionHeader>
                                <IRParagraph>
                                    <span className="meta-tag">[Conclusion]</span>
                                    {sample.conclusion}
                                </IRParagraph>
                                
                                <p style={{ fontSize: '0.85em', color: '#718096', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>
                                    ⏱ Approximate speaking time: 55-60 seconds (Natural speed)
                                </p>
                            </IRFullAnswer>
                        )}
                    </div>
                );
            })}
        </IRCardList>
    );

    const singingSamples = [
        {
            topic: "How taking part in the contest could affect him",
            content: [
                {
                    point: "He could gain valuable stage experience and professional skills.",
                    reason: "Because performing live every week builds confidence and teaches how to handle large audiences and broadcast equipment.",
                    example: "For instance, by receiving feedback from distinguished judges, Jordan can learn professional techniques that aren't taught in school."
                },
                {
                    point: "On the negative side, he might experience significant emotional distress.",
                    reason: "As the judges are described as 'mean and critical', their harsh comments could hurt his self-esteem in front of a national audience.",
                    example: "For example, Mrs. Wong mentioned that judges can destroy the confidence of young singers with their critical attitude."
                }
            ]
        },
        {
            topic: "How winning the contest could influence him",
            content: [
                {
                    point: "Winning would provide a massive launchpad for his professional music career.",
                    reason: "The winner receives an exclusive one-year record deal and the chance to work with the hottest names in the industry.",
                    example: "Looking at last season's winner, Meg Lee, she achieved pop stardom and appeared on various magazine covers and TV shows."
                },
                {
                    point: "However, it could also lead to a complete loss of privacy.",
                    reason: "Becoming a celebrity 'idol' overnight makes one a target for paparazzi and constant public scrutiny.",
                    example: "Jordan might find it difficult to go to school or meet friends normally if people are constantly stopping him for photos or tracking his movements."
                }
            ]
        },
        {
            topic: "What concerns his parents might have",
            content: [
                {
                    point: "The biggest concern for his parents would likely be the impact on his studies.",
                    reason: "Since Jordan is over 16, he is still at an age where education is crucial, and the show's weekly live format demands huge preparation time.",
                    example: "They might worry that Jordan will neglect his exams or homework while chasing his dream of pop stardom."
                },
                {
                    point: "They would also be worried about his mental and emotional maturity.",
                    reason: "As a teenager, Jordan might not be ready to handle the 'mean' judges or the pressure of being eliminated on TV.",
                    example: "His parents might feel protective and fear that a public failure could have long-term negative effects on his mental health."
                }
            ]
        }
    ];

    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 5</BackButton>
            <h2>Ideas and organization</h2>

            <NavTabs>
                {steps.map((step, index) => (
                    <NavTab 
                        key={index} 
                        active={currentStep === index}
                        onClick={() => setCurrentStep(index)}
                    >
                        {index === 0 ? 'Part A: Group Interaction' : 'Part B: Individual Response'}
                    </NavTab>
                ))}
            </NavTabs>

            {currentStep === 0 && (
                <>
                    <Section>
                        <h3>Identifying arguments in the input text</h3>
                        <p>In the speaking exam, you might be asked to discuss the arguments for and/or against an issue. Sometimes, understanding the different opinions and arguments presented in the input text can help you come up with ideas.</p>
                        <p>Look at the Exam practice question below.</p>
                        <InstructionBox>
                            <h4>GENERAL INSTRUCTIONS</h4>
                            <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. Part B will immediately follow Part A. DO NOT write anything on this page.</p>
                            <h4>Part A Group Interaction</h4>
                            <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                        </InstructionBox>
                        <ArticleBox>
                            <p>This article appeared in a local newspaper:</p>
                            <h4>Singing talents find fame on 'Hong Kong Idol'</h4>
                            <p>Good news for aspiring singers over the age of 16: you can now sign up for 'Hong Kong Idol' and have a shot at pop stardom.</p>
                            <p>Contestants in the talent show perform live on TV every week. They face a panel of tough and distinguished judges including experienced singers and well-known music producers. TV viewers will also vote for their favourite singer. One contestant gets eliminated in each episode.</p>
                            <p>For the contestants, 'Hong Kong Idol' is a once-in-a-lifetime opportunity. The winner gets an exclusive one-year record deal with a chance to work with some of the hottest names in showbiz. Meg Lee, who won last season's contest, has appeared on magazine covers everywhere and given interviews to a number of TV shows.</p>
                            <p>However, audience feedback has been mixed. 'The judges are so mean and critical,' says Mrs Wong, a 34-year-old viewer. 'They really destroy the confidence of some of the young singers.'</p>
                        </ArticleBox>
                        <p>Your classmate Jordan wants to join the 'Hong Kong Idol' contest. Your group has been asked to discuss whether this is a good idea. You may want to talk about:</p>
                        <ul>
                            <li>how taking part in the contest could affect him</li>
                            <li>how winning the contest could influence him</li>
                            <li>what concerns his parents might have</li>
                            <li>anything else you think is important</li>
                        </ul>

                        <SampleContainer>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4 style={{ margin: 0, color: '#2b6cb0' }}>💡 Speaking Practice Samples (Part A 参考范例)</h4>
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
                                    {showSampleSection ? 'Close' : 'View Group Interaction Ideas'}
                                </button>
                            </div>
                            
                            {showSampleSection && (
                                <div>
                                    <p style={{ fontSize: '0.9em', margin: '15px 0 10px', color: '#4a5568' }}>Select a discussion point to see sample PRE arguments:</p>
                                    <SampleTabGroup>
                                        {singingSamples.map((s, idx) => (
                                            <SampleTabItem 
                                                key={idx} 
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
                                                <div className="pre-title"><span>PRE {cIdx + 1}</span> Model Argument:</div>
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
                        <h3>Note-taking skills: organizing your arguments</h3>
                        <p>When making notes for discussion questions which ask you to argue for and/or against a position, pay attention to the following:</p>
                        <NoteTakingTips>
                            <ul>
                                <li><strong>Make notes on arguments both for and against the issue.</strong></li>
                                <li><strong>Mark your arguments clearly.</strong> Use columns, tables, symbols and abbreviations (e.g., ✓/✗, +/-).</li>
                                <li><strong>PREP.</strong> When organizing your ideas, you can extend the PRE structure to PREP (Point-Reason-Experience-Position).</li>
                            </ul>
                        </NoteTakingTips>
                        <PrepStructure>
                            <PrepStep>① P = point</PrepStep>
                            <PrepStep>② R = reason</PrepStep>
                            <PrepStep>③ E = personal experience</PrepStep>
                            <PrepStep>④ P = position</PrepStep>
                        </PrepStructure>
                         <Exercise>
                            <Instruction><strong>D1</strong> Complete the notecard for the Exam practice question. You may find these words and phrases useful.</Instruction>
                            <WordBank>
                                <strong>taking part:</strong> to try one's best, stage fright, audience, feedback, to make fun of, to criticize, valuable experience
                                <br/>
                                <strong>winning:</strong> prizes, fame, newspaper, to report, to be known, opportunity, encouragement, paparazzi, public attention
                                <br/>
                                <strong>parents:</strong> to care about, anxious, protective, supportive, to persuade, positive, negative, decision
                            </WordBank>
                            <Notecard />
                        </Exercise>
                    </Section>

                    <Section>
                        <h3>Paper 4 Exam practice (Part A)</h3>
                        <p>In groups of four, complete Part A of the Exam practice on page 75. Use your notes on page 78 and the notecard below to help you.</p>
                        <Notecard>
                            <h4 style={{textAlign: 'center', width: '100%', marginBottom: '15px'}}>Notecard</h4>
                            <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Taking part in the contest</p>
                            <br/><br/>
                            <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Winning the contest</p>
                            <br/><br/>
                            <p style={{fontWeight: 'bold', background: '#fff', paddingRight: '10px', display: 'inline-block'}}>Parents' concerns</p>
                        </Notecard>
                    </Section>
                </>
            )}

            {currentStep === 1 && (
                <>
                    <Section>
                        <h3>Individual Response: giving arguments for or against</h3>
                        <p>In the Individual Response, you may be asked to give arguments for or against an issue. Follow the flow chart below to structure your 1-minute answer.</p>
                        <FlowChart>
                            <FlowChartStep>
                                <p>1. State your position/Give a short introduction</p>
                                <ul>
                                    <li>I think it's a good/bad idea ...</li>
                                    <li>I can think of many problems ...</li>
                                    <li>There are several advantages/disadvantages ...</li>
                                </ul>
                            </FlowChartStep>
                            <FlowChartArrow>↓</FlowChartArrow>
                            <FlowChartStep>
                                <p>2. Offer two to three arguments (use PRE)</p>
                                 <ul>
                                    <li>First,/Second,/Third, ...</li>
                                    <li>One of the positive/negative effects of ...</li>
                                    <li>Also,/Moreover,/On top of that, ...</li>
                                </ul>
                                <p>3. Compare your position with the other side</p>
                                 <ul>
                                    <li>Some people may argue that ... However, ...</li>
                                    <li>Others may think that ... but ...</li>
                                </ul>
                            </FlowChartStep>
                            <FlowChartArrow>↓</FlowChartArrow>
                            <FlowChartStep>
                                <p>4. End your response</p>
                                <ul>
                                    <li>This is why I believe ...</li>
                                    <li>These are some advantages/disadvantages/problems I can think of.</li>
                                </ul>
                            </FlowChartStep>
                        </FlowChart>

                        <div style={{ marginTop: '40px' }}>
                            <h3 style={{ borderBottom: '2px solid #6b46c1', color: '#6b46c1' }}>🎤 Individual Response Practice (1-Minute Samples)</h3>
                            <p>Click on a question below to see a model response (1-6):</p>
                            {/* Original 6 Samples */}
                            {renderInteractiveCards(0, 6)}
                        </div>

                        <div style={{ marginTop: '40px' }}>
                            <h3 style={{ borderBottom: '2px solid #e53e3e', color: '#e53e3e' }}>📄 Exam Practice (Part B: Individual Response)</h3>
                            <p>The following questions are based on the Group Interaction topic. Click to see model answers (7-14):</p>
                            {/* New 8 Samples */}
                            {renderInteractiveCards(6, 14)}
                        </div>
                    </Section>
                </>
            )}

            <PaginationControls>
                <PageButton disabled={currentStep === 0} onClick={prevStep}>
                    ← Previous
                </PageButton>
                <div style={{ color: '#718096', fontWeight: 'bold' }}>
                    Page {currentStep + 1} of {steps.length}
                </div>
                <PageButton disabled={currentStep === steps.length - 1} onClick={nextStep}>
                    Next →
                </PageButton>
            </PaginationControls>
        </IdeasContainer>
    );
};

export default Unit5IdeasAndOrganization;
