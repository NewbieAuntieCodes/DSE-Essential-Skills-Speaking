/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import styles from './styles.module.css';
import Unit1WarmUp from './Unit1WarmUp';
import Unit2WarmUp from './Unit2WarmUp';
import Unit3WarmUp from './Unit3WarmUp';
import Unit4WarmUp from './Unit4WarmUp';
import Unit5WarmUp from './Unit5WarmUp';
import Unit6WarmUp from './Unit6WarmUp';
import Unit7WarmUp from './Unit7WarmUp';
import Unit8WarmUp from './Unit8WarmUp';

interface WarmUpsCollectionProps {
    onBack: () => void;
}

const WarmUpsCollection: React.FC<WarmUpsCollectionProps> = ({ onBack }) => {
    const [currentUnit, setCurrentUnit] = useState(1);

    const unitTitles = [
        "Unit 1: Let's get started!",
        "Unit 2: Between friends",
        "Unit 3: Aiming for gold",
        "Unit 4: Reduce, reuse, recycle!",
        "Unit 5: Becoming a star",
        "Unit 6: Fads and trends",
        "Unit 7: Taking a trip",
        "Unit 8: Social change",
    ];

    const handlePrev = () => {
        setCurrentUnit(prev => (prev > 1 ? prev - 1 : 8));
    };

    const handleNext = () => {
        setCurrentUnit(prev => (prev < 8 ? prev + 1 : 1));
    };

    const renderUnitContent = () => {
        // The onBack prop is passed as a no-op because the back button within these components will be hidden by CSS.
        switch (currentUnit) {
            case 1: return <Unit1WarmUp onBack={() => {}} />;
            case 2: return <Unit2WarmUp onBack={() => {}} />;
            case 3: return <Unit3WarmUp onBack={() => {}} />;
            case 4: return <Unit4WarmUp onBack={() => {}} />;
            case 5: return <Unit5WarmUp onBack={() => {}} />;
            case 6: return <Unit6WarmUp onBack={() => {}} />;
            case 7: return <Unit7WarmUp onBack={() => {}} />;
            case 8: return <Unit8WarmUp onBack={() => {}} />;
            default: return null;
        }
    };

    return (
        <div className={styles.collectionContainer}>
            <button className={styles.backButton} onClick={onBack}>← Back to Main Menu</button>
            <div className={styles.navContainer}>
                <button className={styles.navButton} onClick={handlePrev}>← Previous</button>
                <h3 className={styles.unitTitle}>{unitTitles[currentUnit - 1]}</h3>
                <button className={styles.navButton} onClick={handleNext}>Next →</button>
            </div>
            <div className={styles.contentWrapper}>
                {renderUnitContent()}
            </div>
        </div>
    );
};

export default WarmUpsCollection;
