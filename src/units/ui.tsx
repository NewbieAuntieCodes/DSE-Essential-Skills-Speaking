/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import styles from './styles.module.css';

const cx = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(' ');

export function CommunicationContainer(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.container, props.className)} />;
}

export const IdeasContainer = CommunicationContainer;

export function BackButton(props: React.ComponentPropsWithoutRef<'button'>) {
  return <button {...props} className={cx(styles.backButton, props.className)} />;
}

export function Section(props: React.ComponentPropsWithoutRef<'section'>) {
  return <section {...props} className={cx(styles.section, props.className)} />;
}

export function Exercise(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.exercise, props.className)} />;
}

export function Instruction(props: React.ComponentPropsWithoutRef<'p'>) {
  return <p {...props} className={cx(styles.instruction, props.className)} />;
}

export function Table(props: React.ComponentPropsWithoutRef<'table'>) {
  return <table {...props} className={cx(styles.table, props.className)} />;
}

export function Th(props: React.ComponentPropsWithoutRef<'th'>) {
  return <th {...props} className={cx(styles.th, props.className)} />;
}

export function Td(props: React.ComponentPropsWithoutRef<'td'>) {
  return <td {...props} className={cx(styles.td, props.className)} />;
}

export function WordGrid(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.wordGrid, props.className)} />;
}

export function WordBox(props: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={cx(styles.wordBox, props.className)} />;
}

export function InstructionBox(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.box, props.className)} />;
}

export function ArticleBox(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.box, styles.articleBox, props.className)} />;
}

export function RememberBox(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.box, styles.rememberBox, props.className)} />;
}

export function TipBox(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.box, styles.tipBox, props.className)} />;
}

export function NoteCard(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.box, styles.noteCard, props.className)} />;
}

export const NoteGrid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.noteGrid, props.className)} />
);

export const EmptyNote = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.emptyNote, props.className)} />
);

export const FillInTheBlankExercise = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.fillInBlankExercise, props.className)} />
);

export const BlankBox = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.blankBox, props.className)} />
);

export const AbbreviationList = (props: React.ComponentPropsWithoutRef<'ul'>) => (
  <ul {...props} className={cx(styles.abbreviationList, props.className)} />
);

export const AIFeatureBox = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.aiFeatureBox, props.className)} />
);

export const GenerateButton = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <button {...props} className={cx(styles.generateButton, props.className)} />
);

export const LoadingText = (props: React.ComponentPropsWithoutRef<'p'>) => (
  <p {...props} className={cx(styles.loadingText, props.className)} />
);

export const ErrorMessage = (props: React.ComponentPropsWithoutRef<'p'>) => (
  <p {...props} className={cx(styles.errorMessage, props.className)} />
);

export const ResultsContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.resultsContainer, props.className)} />
);

export function StepDiagram(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.stepDiagram, props.className)} />;
}

export function StepBox(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.stepBox, props.className)} />;
}

export function Arrow(props: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={cx(styles.arrow, props.className)} />;
}

export function ConversationContainer(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.conversationContainer, props.className)} />;
}

export function ConversationBubble(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.conversationBubble, props.className)} />;
}

export const NoteTakingExample = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.box, props.className)} />
);

export function DialogueGrid(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.gridAuto, props.className)} />;
}

export function DialogueBubble(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.bubble, props.className)} />;
}

export const OptionsGrid = DialogueGrid;
export const OptionCard = DialogueBubble;
export const PhotoGrid = DialogueGrid;
export const PhotoCard = DialogueBubble;

/* Unit 2 extras */
export const StructureDiagram = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.structureDiagram, props.className)} />
);
export const StructureBox = (props: React.ComponentPropsWithoutRef<'span'>) => <span {...props} />;
export const PlusSign = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.plusSign, props.className)} />
);

export const AnnotationExercise = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.annotationExercise, props.className)} />
);
export const AnnotationItem = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.annotationItem, props.className)} />
);
export const SpeakerBubble = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.speakerBubble, props.className)} />
);
export const AnnotationOptions = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.annotationOptions, props.className)} />
);
export const AnnotationOption = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.annotationOption, props.className)} />
);

export const MindMapGrid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapGrid, props.className)} />
);
export const MindMapCenter = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapCenter, props.className)} />
);

function MindMapNodeBase(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.mindMapNode, props.className)} />;
}
export const NodeTopLeft = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <MindMapNodeBase {...props} className={cx(styles.nodeTopLeft, props.className)} />
);
export const NodeTopRight = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <MindMapNodeBase {...props} className={cx(styles.nodeTopRight, props.className)} />
);
export const NodeBottomLeft = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <MindMapNodeBase {...props} className={cx(styles.nodeBottomLeft, props.className)} />
);
export const NodeBottomRight = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <MindMapNodeBase {...props} className={cx(styles.nodeBottomRight, props.className)} />
);
export const NodeBottomCenter = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <MindMapNodeBase {...props} className={cx(styles.nodeBottomCenter, props.className)} />
);

export const AnticipationMindMap = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.gridTight, props.className)} />
);
export const AnticipationNode = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.wordBox, props.className)} />
);
export const ResponseFlowChart = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.flowChart, props.className)} />
);
export const FlowChartStep = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.flowChartStep, props.className)} />
);
export const FlowChartArrow = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.flowChartArrow, props.className)} />
);
export const TimeManagementContainer = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} />;
export const PieChart = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} />;
export const PieChartLabels = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} />;
export const PieChartLabel = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} />;
export const ExamPracticeNotecard = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.examPracticeNotecard, props.className)} />
);
export const IndividualResponseList = (props: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol {...props} className={cx(styles.individualResponseList, props.className)} />
);

/* Unit 3 prompt sections */
export type PromptType = 'advantage' | 'disadvantage' | 'accessibility';
export const SpeakingPromptsContainer = (props: React.ComponentPropsWithoutRef<'div'>) => <div {...props} />;

const promptTypeClass: Record<PromptType, string> = {
  advantage: styles.promptAdvantage,
  disadvantage: styles.promptDisadvantage,
  accessibility: styles.promptAccessibility,
};

export function PromptSection({
  type,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { type: PromptType }) {
  return <div {...props} className={cx(styles.promptSection, promptTypeClass[type], className)} />;
}
export function PromptSectionTitle({
  type: _type,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h3'> & { type: PromptType }) {
  return <h3 {...props} className={cx(styles.promptSectionTitle, className)} />;
}
export function PromptGrid(props: React.ComponentPropsWithoutRef<'div'>) {
  return <div {...props} className={cx(styles.promptGrid, props.className)} />;
}
export function PromptCard({
  type,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { type: PromptType }) {
  return <div {...props} className={cx(styles.promptCard, promptTypeClass[type], className)} />;
}
export const AthleteCard = OptionCard;
export const FillInTheBlank = BlankBox;
export const DialogueCompletionExercise = FillInTheBlankExercise;
export const DialogueLine = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueLine, props.className)} />
);

/* Unit 4 layouts */
export const AdGrid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.adGrid, props.className)} />
);
export const AdCard = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.adCard, props.className)} />
);
export const VisualDesignMindMap = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.visualDesignMindMap, props.className)} />
);
export const CenterNode = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.centerNode, props.className)} />
);
export const MindMapBubble = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapBubble, props.className)} />
);
export const NoteTakingMindMap = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.noteTakingMindMap, props.className)} />
);
export const MindMapQuadrant = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapQuadrant, props.className)} />
);
export const MindMapCenterLabel = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapCenterLabel, props.className)} />
);
export const WordBank = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.wordBank, props.className)} />
);
export const FlowChart = ResponseFlowChart;
export const Notecard = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.notecard, props.className)} />
);
export const ModelAnswerButton = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <button {...props} className={cx(styles.modelAnswerButton, props.className)} />
);
export const ModelAnswerContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.modelAnswerContainer, props.className)} />
);
export const TwoColumnGrid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.twoColumnGrid, props.className)} />
);

/* Unit 5 navigation + interactive pieces */
export const NavTabs = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.navTabs, props.className)} />
);

export function NavTab({
  active,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { active: boolean }) {
  return (
    <button
      {...props}
      className={cx(styles.navTab, active ? styles.navTabActive : undefined, className)}
    />
  );
}

export const PaginationControls = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.paginationControls, props.className)} />
);

export const PageButton = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <button {...props} className={cx(styles.pageButton, props.className)} />
);

export const SentenceList = (props: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol {...props} className={cx(styles.sentenceList, props.className)} />
);

export const PracticePointsContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.practicePointsContainer, props.className)} />
);

export function PracticePointCard({
  isFor,
  isExpanded,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { isFor: boolean; isExpanded: boolean }) {
  return (
    <div
      {...props}
      className={cx(
        styles.practicePointCard,
        isFor ? styles.practicePointFor : styles.practicePointAgainst,
        isExpanded ? undefined : styles.practicePointCollapsed,
        className,
      )}
    />
  );
}

export const ForAgainstTable = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.forAgainstTable, props.className)} />
);

export const ForAgainstColumn = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.forAgainstColumn, props.className)} />
);

export const MindMapContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapContainer, props.className)} />
);

export const MindMapNode = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mindMapNode, props.className)} />
);

export const InteractiveNodeContent = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.interactiveNodeContent, props.className)} />
);

export const RevealPlaceholder = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.revealPlaceholder, props.className)} />
);

export const DialogueCompletion = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueCompletion, props.className)} />
);

export const DialogueText = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueText, props.className)} />
);

export const DialogueBlank = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueBlank, props.className)} />
);

export const DialogueAction = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <button {...props} className={cx(styles.dialogueAction, props.className)} />
);

export const SampleContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.sampleContainer, props.className)} />
);

export const SampleTabGroup = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.sampleTabGroup, props.className)} />
);

export function SampleTabItem({
  active,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & { active: boolean }) {
  return (
    <button
      {...props}
      className={cx(styles.sampleTabItem, active ? styles.sampleTabItemActive : undefined, className)}
    />
  );
}

export const SampleContentBox = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.sampleContentBox, props.className)} />
);

export const PreSet = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.preSet, props.className)} />
);

export const AudioPlayerWrapper = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.audioPlayerWrapper, props.className)} />
);

export const HighlightedText = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.highlightedText, props.className)} />
);

export const CheckboxLabel = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.checkboxLabel, props.className)} />
);

export const NoteTakingTips = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.noteTakingTips, props.className)} />
);

export const PrepStructure = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.prepStructure, props.className)} />
);

export const PrepStep = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.prepStep, props.className)} />
);

export const IRCardList = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.irCardList, props.className)} />
);

export function IRCard({
  active,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { active: boolean }) {
  return (
    <div {...props} className={cx(styles.irCard, active ? styles.irCardActive : undefined, className)} />
  );
}

export const IRFullAnswer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.irFullAnswer, props.className)} />
);

export function IRSectionHeader({
  color,
  style,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { color: string }) {
  return (
    <div
      {...props}
      style={{ backgroundColor: color, ...(style || {}) }}
      className={cx(styles.irSectionHeader, className)}
    />
  );
}

export const IRParagraph = (props: React.ComponentPropsWithoutRef<'p'>) => (
  <p {...props} className={cx(styles.irParagraph, props.className)} />
);

export const IRDivider = (props: React.ComponentPropsWithoutRef<'hr'>) => (
  <hr {...props} className={cx(styles.irDivider, props.className)} />
);

/* Unit 6 bar chart */
export const SurveyBox = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.surveyBox, props.className)} />
);

export const BarChartContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.barChartContainer, props.className)} />
);

export const BarChart = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.barChart, props.className)} />
);

export const BarWrapper = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.barWrapper, props.className)} />
);

export function Bar({
  height,
  color,
  style,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { height: number; color: string }) {
  return (
    <div
      {...props}
      style={{ height: `${height}%`, backgroundColor: color, ...(style || {}) }}
      className={cx(styles.bar, className)}
    />
  );
}

export const BarLabel = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.barLabel, props.className)} />
);

/* Unit 7 strategy list */
export const StrategyList = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.strategyList, props.className)} />
);

export const StrategyItem = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.strategyItem, props.className)} />
);

export const SpeakerLabel = (props: React.ComponentPropsWithoutRef<'strong'>) => (
  <strong {...props} className={cx(styles.speakerLabel, props.className)} />
);

export const DialogueContent = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueContent, props.className)} />
);

export const DialogueHint = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.dialogueHint, props.className)} />
);

export const RolePlayDialogue = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.rolePlayDialogue, props.className)} />
);

export const ConjunctionBox = (props: React.ComponentPropsWithoutRef<'span'>) => (
  <span {...props} className={cx(styles.conjunctionBox, props.className)} />
);

/* Unit 7 jobs */
export const JobGrid = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.jobGrid, props.className)} />
);

export const JobCard = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.jobCard, props.className)} />
);

export const NotecardExercise = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.notecardExercise, props.className)} />
);

/* Unit 8 extras */
export const QuestionTable = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.questionTable, props.className)} />
);

export const DoNotTakeAway = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.doNotTakeAway, props.className)} />
);

export const ExamPracticeContainer = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.examPracticeContainer, props.className)} />
);

export const Sidebar = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.sidebar, props.className)} />
);

export const MainContent = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className={cx(styles.mainContent, props.className)} />
);
