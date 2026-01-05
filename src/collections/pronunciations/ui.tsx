/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styles from './styles.module.css';

export function CollectionContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.collectionContainer} ${props.className ?? ''}`} />;
}

export function BackButton(props: React.ComponentPropsWithoutRef<'button'>) {
    return <button {...props} className={`${styles.backButton} ${props.className ?? ''}`} />;
}

export function NavContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.navContainer} ${props.className ?? ''}`} />;
}

export function NavButton(props: React.ComponentPropsWithoutRef<'button'>) {
    return <button {...props} className={`${styles.navButton} ${props.className ?? ''}`} />;
}

export function UnitTitle(props: React.ComponentPropsWithoutRef<'h3'>) {
    return <h3 {...props} className={`${styles.unitTitle} ${props.className ?? ''}`} />;
}

export function ContentWrapper(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.contentWrapper} ${props.className ?? ''}`} />;
}

export function PronunciationContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.pronunciationContainer} ${props.className ?? ''}`} />;
}

export function Section(props: React.ComponentPropsWithoutRef<'section'>) {
    return <section {...props} className={`${styles.section} ${props.className ?? ''}`} />;
}

export function SubSection(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.subSection} ${props.className ?? ''}`} />;
}

export function Exercise(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.exercise} ${props.className ?? ''}`} />;
}

export function Instruction(props: React.ComponentPropsWithoutRef<'p'>) {
    return <p {...props} className={`${styles.instruction} ${props.className ?? ''}`} />;
}

export function SoundDiagramContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.soundDiagramContainer} ${props.className ?? ''}`} />;
}

export function SoundDiagram(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.soundDiagram} ${props.className ?? ''}`} />;
}

export function Table(props: React.ComponentPropsWithoutRef<'table'>) {
    return <table {...props} className={`${styles.table} ${props.className ?? ''}`} />;
}

export function EdEndingTable(props: React.ComponentPropsWithoutRef<'table'>) {
    return <table {...props} className={`${styles.edEndingTable} ${props.className ?? ''}`} />;
}

export function Th(props: React.ComponentPropsWithoutRef<'th'>) {
    return <th {...props} className={`${styles.th} ${props.className ?? ''}`} />;
}

export function Td(props: React.ComponentPropsWithoutRef<'td'>) {
    return <td {...props} className={`${styles.td} ${props.className ?? ''}`} />;
}

export function Arrow(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.arrow} ${props.className ?? ''}`} />;
}

export function Highlight(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.highlight} ${props.className ?? ''}`} />;
}

export function WordGrid(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.wordGrid} ${props.className ?? ''}`} />;
}

export function WordBox(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.wordBox} ${props.className ?? ''}`} />;
}

export function WordBoxCard(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.wordBoxCard} ${props.className ?? ''}`} />;
}

export function WordList(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.wordList} ${props.className ?? ''}`} />;
}

export function WordPair(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.wordPair} ${props.className ?? ''}`} />;
}

export function QuoteList(props: React.ComponentPropsWithoutRef<'ol'>) {
    return <ol {...props} className={`${styles.quoteList} ${props.className ?? ''}`} />;
}

export function TongueTwisterList(props: React.ComponentPropsWithoutRef<'ol'>) {
    return <ol {...props} className={`${styles.tongueTwisterList} ${props.className ?? ''}`} />;
}

export function PausedText(props: React.ComponentPropsWithoutRef<'p'>) {
    return <p {...props} className={`${styles.pausedText} ${props.className ?? ''}`} />;
}

export function ExampleBox(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.exampleBox} ${props.className ?? ''}`} />;
}

export function DialogueContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.dialogueContainer} ${props.className ?? ''}`} />;
}

export function SentenceList(props: React.ComponentPropsWithoutRef<'ol'>) {
    return <ol {...props} className={`${styles.sentenceList} ${props.className ?? ''}`} />;
}
