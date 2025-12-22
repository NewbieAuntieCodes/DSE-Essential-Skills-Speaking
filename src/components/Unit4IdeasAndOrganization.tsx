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
    AdGrid,
    AdCard,
    VisualDesignMindMap,
    CenterNode,
    MindMapBubble,
    Exercise,
    Instruction,
    NoteTakingMindMap,
    MindMapQuadrant,
    MindMapCenterLabel,
    WordBank,
    FlowChart,
    FlowChartStep,
    FlowChartArrow,
    RememberBox,
    Notecard,
    IndividualResponseList,
    ModelAnswerButton,
    ModelAnswerContainer,
} from './Unit4IdeasAndOrganization.styles';

interface Unit4IdeasAndOrganizationProps {
    onBack: () => void;
}

const Unit4IdeasAndOrganization: React.FC<Unit4IdeasAndOrganizationProps> = ({ onBack }) => {
    const [showModelAnswer, setShowModelAnswer] = useState(false);

    return (
        <IdeasContainer>
            <BackButton onClick={onBack}>← Back to Unit 4</BackButton>
            <h2>Ideas and organization</h2>

            <Section>
                <h3>Responding to visual prompts</h3>
                <p>In the speaking exam, you may be asked to respond to and comment on the visual elements in an input text. Look at the Exam practice question below.</p>
                <InstructionBox>
                    <h4>GENERAL INSTRUCTIONS</h4>
                    <p>This paper consists of two parts: Part A, Group Interaction; and Part B, Individual Response. DO NOT write anything on this page.</p>
                    <h4>Part A Group Interaction</h4>
                    <p>You will be given 10 minutes to prepare. The time allowed for the group interaction is 8 minutes (or 6 minutes for a group of 3 candidates). You may make notes on the notecard provided and refer to your notes during the discussion.</p>
                </InstructionBox>
                <AdGrid>
                    <p>This advertisement for eco-volunteering holidays appeared on a website:</p>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1574717024633-596a72aa1b47?q=80&w=200" alt="Jungle in Peru" />
                        <div>
                            <h4>Jungle conservation in Peru</h4>
                            <p>Work alongside local staff to help protect endangered animals in the Amazon, the world's largest rainforest. Tasks include checking camera traps, collecting data on wild animals and caring for injured animals at rescue centres.</p>
                        </div>
                    </AdCard>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=200" alt="Coastline in Thailand" />
                        <div>
                            <h4>Coastline conservation in Thailand</h4>
                            <p>Enjoy beautiful views while participating in beach clean-ups, mangrove planting and bird watches. You will stay in a private room in a beachfront villa, and you can enjoy activities such as beach volleyball and windsurfing in your downtime.</p>
                        </div>
                    </AdCard>
                    <AdCard>
                        <img src="https://images.unsplash.com/photo-1549488344-cbb6c144e207?q=80&w=200" alt="Farming in Nepal" />
                        <div>
                            <h4>Sustainable farming in Nepal</h4>
                            <p>Immerse yourself in the rugged landscape of rural Nepal, where you will assist local farmers with developing environmentally friendly agriculture techniques. Learn to harvest crops and feed livestock. If you are an energetic person who loves the nature, this is the trip for you!</p>
                        </div>
                    </AdCard>
                </AdGrid>
                <p>Your class is planning to go on an eco-volunteering holiday for a class trip. Your group has been asked to discuss which holiday to choose based on the advertisement above. You may want to talk about:</p>
                <ul>
                    <li>which trip seems the most interesting</li>
                    <li>which trip would be the most helpful to the environment</li>
                    <li>negative aspects of each trip</li>
                    <li>anything else you think is important</li>
                </ul>

                <ModelAnswerButton onClick={() => setShowModelAnswer(!showModelAnswer)}>
                    {showModelAnswer ? 'Hide Model Answer' : 'Show Model Answer'}
                </ModelAnswerButton>

                {showModelAnswer && (
                    <ModelAnswerContainer>
                        <h4>Which trip seems the most interesting?</h4>
                        <h5>PRE 1:</h5>
                        <p><strong>Point:</strong> I think the coastline conservation trip in Thailand is the most interesting.</p>
                        <p><strong>Reason:</strong> This is because it offers a perfect balance between meaningful work and fun leisure activities.</p>
                        <p><strong>Example:</strong> For example, after doing beach clean-ups, we can relax by playing beach volleyball or even try windsurfing. It sounds like a real holiday, not just work.</p>

                        <h5>PRE 2:</h5>
                        <p><strong>Point:</strong> For me, the jungle conservation trip in Peru sounds more exciting.</p>
                        <p><strong>Reason:</strong> The reason is that it’s a rare chance to get close to wildlife in the Amazon rainforest, which is a very unique and special place.</p>
                        <p><strong>Example:</strong> For instance, we could actually help care for injured animals at rescue centres. That would be an unforgettable and very rewarding experience.</p>

                        <h4>Which trip would be the most helpful to the environment?</h4>
                        <h5>PRE 1:</h5>
                        <p><strong>Point:</strong> I believe the trip to Peru would be the most helpful to the environment.</p>
                        <p><strong>Reason:</strong> This is because it focuses on protecting endangered animals and the world's largest rainforest, which is critical for global climate stability.</p>
                        <p><strong>Example:</strong> For example, collecting data on wild animals directly contributes to scientific research that can help create better conservation strategies for the whole Amazon ecosystem.</p>
                        
                        <h5>PRE 2:</h5>
                        <p><strong>Point:</strong> I think the sustainable farming trip in Nepal could also be very helpful in the long run.</p>
                        <p><strong>Reason:</strong> The reason is that it teaches local farmers environmentally friendly techniques, which creates a long-lasting positive impact on the local environment.</p>
                        <p><strong>Example:</strong> For instance, if we help them develop sustainable agriculture, they can continue using these methods for years, reducing deforestation and soil pollution in their community.</p>

                        <h4>What are the negative aspects of each trip?</h4>
                        <h5>PRE 1 (Peru):</h5>
                        <p><strong>Point:</strong> One negative aspect of the Peru trip could be the potential danger.</p>
                        <p><strong>Reason:</strong> This is because the Amazon rainforest is a wild environment with unfamiliar animals and insects.</p>
                        <p><strong>Example:</strong> For example, there's a risk of getting insect bites that could cause diseases, or getting lost in a huge, dense jungle. It might not be very safe for students.</p>

                        <h5>PRE 2 (Thailand):</h5>
                        <p><strong>Point:</strong> A possible drawback of the Thailand trip is that it might not feel like a serious volunteering experience.</p>
                        <p><strong>Reason:</strong> The reason is that the advertisement focuses a lot on leisure activities like staying in a beachfront villa and windsurfing.</p>
                        <p><strong>Example:</strong> For instance, some students might get distracted and treat it more like a beach party holiday, forgetting the main purpose of environmental conservation.</p>

                        <h5>PRE 3 (Nepal):</h5>
                        <p><strong>Point:</strong> As for the Nepal trip, a negative point could be the hard physical labour.</p>
                        <p><strong>Reason:</strong> This is because farming tasks like harvesting crops and feeding livestock can be very tiring, especially for students who are not used to it.</p>
                        <p><strong>Example:</strong> For example, working under the sun all day in a rugged landscape could be physically challenging and might not be enjoyable for everyone in the class.</p>
                    </ModelAnswerContainer>
                )}
            </Section>

            <Section>
                 <h3>When discussing the visual and graphic elements of an input text, you may consider the following:</h3>
                <VisualDesignMindMap>
                    <MindMapBubble className="elements">
                        <h4>Elements of graphic design:</h4>
                        <ul>
                            <li>illustration, photo, image, cartoon, clip art, icon, logo, graphics</li>
                        </ul>
                    </MindMapBubble>
                    <MindMapBubble className="styles">
                        <h4>Styles:</h4>
                        <ul>
                            <li>formal/informal, youthful, mature, realistic</li>
                            <li><strong>Positive:</strong> attractive, amusing, striking, cool, elegant</li>
                            <li><strong>Negative:</strong> boring, unimaginative, uninteresting, inappropriate</li>
                        </ul>
                    </MindMapBubble>
                    <CenterNode>Discussing visual design</CenterNode>
                    <MindMapBubble className="effects">
                        <h4>Effects:</h4>
                        <ul>
                            <li>to convey/highlight/emphasize a message, to appeal to children/young people/adults</li>
                            <li><strong>Positive:</strong> to grab attention, eye-catching, to make an impact</li>
                            <li><strong>Negative:</strong> shocking, to fall flat</li>
                        </ul>
                    </MindMapBubble>
                    <MindMapBubble className="text">
                        <h4>Text:</h4>
                        <ul>
                            <li><strong>bold</strong>, <em>italics</em>, <u>underlined</u>, CAPITAL LETTERS, font style, font size, heading, slogan, body text</li>
                        </ul>
                    </MindMapBubble>
                </VisualDesignMindMap>
                 <Exercise>
                    <Instruction><strong>D1</strong> In pairs, concentrate on the first suggested talking point on page 60. Using the vocabulary above, describe and discuss the visual design of the advertisement in the Exam practice question. Try to come up with at least three comments.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Note-taking skills: using mind maps</h3>
                <p>Mind maps are a visual way of brainstorming and organizing your ideas. During the speaking exam, it may be a good idea to note down your speaking points in the form of a mind map.</p>
                 <Exercise>
                    <Instruction><strong>D2</strong> Complete the mind map below for the Exam practice question on page 60. You may find the words and phrases at the bottom of the page useful.</Instruction>
                    <NoteTakingMindMap>
                        <MindMapQuadrant><p>most interesting trip</p></MindMapQuadrant>
                        <MindMapQuadrant><p>most helpful to the environment</p></MindMapQuadrant>
                        <MindMapCenterLabel>Eco-friendly volunteering holidays</MindMapCenterLabel>
                        <MindMapQuadrant><p>negative aspects of each trip</p></MindMapQuadrant>
                        <MindMapQuadrant><p>others</p></MindMapQuadrant>
                    </NoteTakingMindMap>
                    <WordBank>
                        <p><strong>most interesting:</strong> scenic, enjoyable, exciting, eye-opening, educational, fun</p>
                        <p><strong>environment:</strong> biodegradable, climate change, deforestation, eco-friendly, endangered species, global warming, green, natural resources, sustainable, waste</p>
                        <p><strong>other:</strong> affordability, cost, immunization, rewarding, risk, schedule</p>
                    </WordBank>
                </Exercise>
            </Section>

            <Section>
                <h3>Individual Response: giving reasons</h3>
                <p>During the Individual Response, you may be asked to give reasons for why certain events happen or why an action takes place. Questions of this type could come in the following forms:</p>
                <ul>
                    <li>Why do you think people recycle?</li>
                    <li>Why is it important for young people to take part in environmental campaigns?</li>
                    <li>Why do some people dislike using too many plastic bags?</li>
                    <li>Why is it difficult for the government to reduce pollution in Hong Kong?</li>
                </ul>
                <p>To answer this type of question, you need to think about the <strong>causes and influences</strong> behind the events and situations introduced in the Group Interaction question.</p>
                <FlowChart>
                    <FlowChartStep><h4>Give a short introduction</h4><p><em>I can think of several reasons why ...</em><br/><em>There are many explanations why ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>Give your first reason (use PRE if appropriate)</h4><p><em>First of all, ...</em><br/><em>One explanation is that ...</em><br/><em>... because/since/as ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>Add reason(s)</h4><p><em>Also, ...</em><br/><em>What's more, ...</em><br/><em>In addition, ...</em><br/><em>Another reason is that ...</em></p></FlowChartStep>
                    <FlowChartArrow>↓</FlowChartArrow>
                    <FlowChartStep><h4>End your response</h4><p><em>These are some reasons why ...</em><br/><em>So, this is why ...</em></p></FlowChartStep>
                </FlowChart>
                <RememberBox>
                    <h4>Remember</h4>
                    <ul>
                        <li>During the speaking exam, you may need to improvise quickly in order to avoid an uncomfortable pause. Improvising involves acting or speaking with little or no preparation.</li>
                        <li>If you get stuck for ideas during the exam, one good strategy is to ask yourself wh-questions about the discussion topic, e.g. <em>Why? What? Where? When? Who? How (many/often/long)?</em></li>
                    </ul>
                </RememberBox>
                 <Exercise>
                    <Instruction><strong>D3</strong> Work in pairs. Take turns to ask each other one of the Individual Response questions from the coloured box at the top of this page. You may use the flow chart above to help you structure your response.</Instruction>
                </Exercise>
            </Section>

            <Section>
                <h3>Paper 4 Exam practice</h3>
                <p>In groups of four, complete Part A of the Exam practice on page 60. Use your notes on page 62 and the notecard below to help you.</p>
                <Notecard>
                    <h4>Notecard</h4>
                    <p>Which trip caught your eye?</p>
                    <div className="blank-space"></div>
                    <p>Which trip could do the most to stop climate change?</p>
                    <div className="blank-space"></div>
                    <p>Most interesting trip</p>
                    <div className="blank-space"></div>
                    <p>Most helpful to the environment</p>
                    <div className="blank-space"></div>
                    <p>Negative aspects</p>
                    <div className="blank-space"></div>
                </Notecard>
                <p>Follow your teacher's instructions and complete Part B.</p>
                <h4>Part B Individual Response</h4>
                <p>The examiner will ask you one or more questions based on Part A. You will have up to 1 minute to respond.</p>
                <IndividualResponseList>
                    <li>Would you like to go on an eco-friendly volunteering holiday?</li>
                    <li>Does your family consider the environment when they plan family trips?</li>
                    <li>What could you learn from volunteering directly with injured or ill animals?</li>
                    <li>Can eco-volunteering holidays do more harm than good?</li>
                    <li>If you were a sea turtle, how would you feel about the plastic in the sea?</li>
                    <li>What kinds of ecotourism holidays could be offered to tourists in Hong Kong?</li>
                    <li>Is it better to donate time or money to an environmental effort?</li>
                    <li>Is it ironic that tourists need to burn fossil fuels to travel to an ecotourism location?</li>
                </IndividualResponseList>
            </Section>
        </IdeasContainer>
    );
};

export default Unit4IdeasAndOrganization;