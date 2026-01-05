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

export function WarmUpContainer(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.warmUpContainer} ${props.className ?? ''}`} />;
}

export function Section(props: React.ComponentPropsWithoutRef<'section'>) {
    return <section {...props} className={`${styles.section} ${props.className ?? ''}`} />;
}

export function Exercise(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.exercise} ${props.className ?? ''}`} />;
}

export function Instruction(props: React.ComponentPropsWithoutRef<'p'>) {
    return <p {...props} className={`${styles.instruction} ${props.className ?? ''}`} />;
}

export function QuestionList(props: React.ComponentPropsWithoutRef<'ol'>) {
    return <ol {...props} className={`${styles.questionList} ${props.className ?? ''}`} />;
}

export function CheckboxGroup(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.checkboxGroup} ${props.className ?? ''}`} />;
}

export function WordGrid(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.wordGrid} ${props.className ?? ''}`} />;
}

export function WordBox(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.wordBox} ${props.className ?? ''}`} />;
}

export function FillInTheBlankExercise(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.fillInTheBlankExercise} ${props.className ?? ''}`} />;
}

export function Blank(props: React.ComponentPropsWithoutRef<'span'>) {
    return <span {...props} className={`${styles.blank} ${props.className ?? ''}`} />;
}

export function DebateBox(props: React.ComponentPropsWithoutRef<'div'>) {
    return <div {...props} className={`${styles.debateBox} ${props.className ?? ''}`} />;
}
