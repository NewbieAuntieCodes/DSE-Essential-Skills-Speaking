/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
    PronunciationContainer,
    BackButton,
    Section,
    SoundDiagramContainer,
    SoundDiagram,
    Exercise,
    Instruction,
    WordList,
    WordPair,
    WordBoxCard,
    QuoteList,
    PausedText
} from './ui';

interface Unit2PronunciationProps {
    onBack: () => void;
}

const Unit2Pronunciation: React.FC<Unit2PronunciationProps> = ({ onBack }) => {
    return (
        <PronunciationContainer>
            <BackButton onClick={onBack}>← Back to Unit 2</BackButton>
            <h2>Pronunciation and delivery</h2>

            <Section>
                <h3>/l/, /r/, /n/ and /m/</h3>
                <p>You should pronounce the sounds /l/, /r/, /n/ and /m/ clearly in your speech. Listen to the recording and use the diagrams below to help you.</p>
                <SoundDiagramContainer>
                    {/* These should be replaced with actual diagram images */}
                    <SoundDiagram>
                        <p>/n/ as in noise /nɔɪz/</p>
                    </SoundDiagram>
                     <SoundDiagram>
                        <p>/m/ as in map /mæp/</p>
                    </SoundDiagram>
                    <SoundDiagram>
                        <p>/l/ as in love /lʌv/</p>
                    </SoundDiagram>
                     <SoundDiagram>
                        <p>/r/ as in road /rəʊd/</p>
                    </SoundDiagram>
                </SoundDiagramContainer>
                <p>Be careful not to pronounce /l/ as /n/.</p>
                <WordPair>
                    <WordBoxCard>generation /dʒenəˈreɪʃn/</WordBoxCard><WordBoxCard><s>/dʒenəˈreɪʃn/</s></WordBoxCard>
                    <WordBoxCard>boring /ˈbɔːrɪŋ/</WordBoxCard><WordBoxCard><s>/ˈbɔːlɪŋ/</s></WordBoxCard>
                </WordPair>
                <br />
                <p>Do not confuse /l/ and /n/.</p>
                 <WordPair>
                    <WordBoxCard>neighbour /ˈneɪbə(r)/</WordBoxCard><WordBoxCard><s>/ˈleɪbə(r)/</s></WordBoxCard>
                    <WordBoxCard>labour /ˈleɪbə(r)/</WordBoxCard><WordBoxCard><s>/ˈneɪbə(r)/</s></WordBoxCard>
                </WordPair>
                <br />
                <p>Pronounce the /n/ and /m/ sounds clearly, especially when they occur at the end of a word:</p>
                <WordPair>
                    <WordBoxCard>teen /ti:n/</WordBoxCard><WordBoxCard><s>/ti:m/</s></WordBoxCard>
                    <WordBoxCard>self-esteem /selfɪˈsti:m/</WordBoxCard><WordBoxCard><s>/selfɪˈsti:n/</s></WordBoxCard>
                </WordPair>

                <Exercise>
                    <Instruction><strong>B1</strong> In pairs, take turns pronouncing the following words. Then listen to the recording and compare your pronunciation.</Instruction>
                    <WordList>
                        <span>1. lap, rap, nap, map</span>
                        <span>2. line, nine, mine</span>
                        <span>3. meaningful, meaningless</span>
                        <span>4. friendly, unfriendly</span>
                        <span>5. lifelessness, restlessness</span>
                        <span>6. mutual, neutral</span>
                    </WordList>
                </Exercise>
            </Section>

            <Section>
                <h3>/v/, /w/ and /f/</h3>
                <p>Do you find it difficult to pronounce the sound /v/? Listen to the recording and use the diagram below to help you.</p>
                 <SoundDiagramContainer>
                    <SoundDiagram>
                        <p>/v/ as in van /væn/</p>
                    </SoundDiagram>
                </SoundDiagramContainer>
                <p>Do not pronounce /v/ as /w/ or /f/.</p>
                <WordPair>
                    <WordBoxCard>view /vju:/</WordBoxCard><WordBoxCard><s>/wju:/</s></WordBoxCard>
                    <WordBoxCard>voice /vɔɪs/</WordBoxCard><WordBoxCard><s>/fɔɪs/</s></WordBoxCard>
                    <WordBoxCard>video /ˈvɪdiəʊ/</WordBoxCard><WordBoxCard><s>/ˈwɪdiəʊ/</s></WordBoxCard>
                </WordPair>
                 <Exercise>
                    <Instruction><strong>B2</strong> You are preparing a presentation on friendship and have found some famous quote. In pairs, take turns to read them out loud. Choose your favourite quote and explain it to your partner.</Instruction>
                    <QuoteList>
                        <li>A real friend is one who walks in when the rest of the world walks out. (Walter Winchell)</li>
                        <li>I have friends in overalls whose friendship I would not swap for the favour of the kings of the world. (Thomas Edison)</li>
                        <li>Victory is sweet, when you win friends. (Anonymous)</li>
                    </QuoteList>
                </Exercise>
                <Exercise>
                    <Instruction><strong>B3</strong> Now listen to the recording and compare your pronunciation.</Instruction>
                </Exercise>
            </Section>

             <Section>
                <h3>Phrasing and pausing</h3>
                <p>When we speak, we divide utterances into meaningful thought groups. Each group contains words that belong together and is separated from the rest by a pause. This makes it easier for listeners to follow and understand our messages and thoughts.</p>
                <p>Read the example below. The slashes (/) indicate the end of the thought groups and the pauses.</p>
                <PausedText>I'm leaving Hong Kong / to study in the UK next month. / I'm feeling I feel terrible / because I'm going to miss my best friend / very much. / Could you please / give me some advice?</PausedText>
                 <Exercise>
                    <Instruction><strong>B4</strong> Read the text below and mark the pauses using slashes (/). Then listen to the recording and compare your answers.</Instruction>
                    <p>Sometimes I find it very hard to strike up a conversation with my parents. We don't have any common interests to talk about. It feels like we live in two different worlds! I suppose it must be the generation gap.</p>
                </Exercise>
            </Section>

        </PronunciationContainer>
    );
};

export default Unit2Pronunciation;
