/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { useVocabulary } from '../contexts/VocabularyContext';
import styles from './VocabularyBook.module.css';

const VocabularyBook: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { vocabulary, removeVocabularyItem, clearVocabulary } = useVocabulary();
    const [copyButtonText, setCopyButtonText] = useState('📋 复制');

    const toggleBook = () => setIsOpen(!isOpen);

    const handleCopyAll = async () => {
        if (vocabulary.length === 0) return;
        const textToCopy = vocabulary.join('\n');
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopyButtonText('✅ 已复制');
            setTimeout(() => setCopyButtonText('📋 复制'), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopyButtonText('❌ 复制失败');
            setTimeout(() => setCopyButtonText('📋 复制'), 2000);
        }
    };

    const handleClearAll = () => {
        if (vocabulary.length > 0) {
            if (window.confirm('你确定要删除所有单词吗？此操作无法撤销。')) {
                clearVocabulary();
            }
        }
    };

    return (
        <>
            <button className={styles.floatingButton} onClick={toggleBook} aria-label="Open vocabulary book">
                📖
            </button>
            {isOpen && (
                <div className={styles.modalOverlay} onClick={toggleBook}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3>单词本 (Vocabulary)</h3>
                            <div className={styles.headerActions}>
                                {vocabulary.length > 0 && (
                                    <>
                                        <button className={styles.headerButton} onClick={handleCopyAll}>
                                            {copyButtonText}
                                        </button>
                                        <button className={`${styles.headerButton} ${styles.deleteAllButton}`} onClick={handleClearAll}>
                                            🗑️ 删除全部
                                        </button>
                                    </>
                                )}
                                <button className={styles.closeButton} onClick={toggleBook} aria-label="Close vocabulary book">&times;</button>
                            </div>
                        </div>
                        {vocabulary.length > 0 ? (
                            <ul className={styles.itemList}>
                                {vocabulary.map((item, index) => (
                                    <li className={styles.item} key={index}>
                                        <span>{item}</span>
                                        <button className={styles.deleteButton} onClick={() => removeVocabularyItem(item)} aria-label={`Delete ${item}`}>&times;</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className={styles.emptyState}>
                                <p>你的单词本是空的。</p>
                                <p>双击一个单词或选择一个词组来添加。</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default VocabularyBook;
