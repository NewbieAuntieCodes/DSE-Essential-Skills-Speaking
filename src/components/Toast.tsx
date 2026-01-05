/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import styles from './Toast.module.css';

interface ToastProps {
    message: string;
    visible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, visible }) => {
    return (
        <div className={`${styles.toast} ${visible ? styles.toastVisible : ''}`}>
            {message}
        </div>
    );
};

export default Toast;
