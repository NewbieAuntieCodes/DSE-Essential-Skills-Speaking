/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styles from './AddPhraseButton.module.css';

interface AddPhraseButtonProps {
    top: number;
    left: number;
    onAdd: () => void;
}

const AddPhraseButton: React.FC<AddPhraseButtonProps> = ({ top, left, onAdd }) => {
    return (
        <button className={styles.addButton} style={{ top: `${top}px`, left: `${left}px` }} onClick={onAdd}>
            <span>+</span> 添加
        </button>
    );
};

export default AddPhraseButton;
