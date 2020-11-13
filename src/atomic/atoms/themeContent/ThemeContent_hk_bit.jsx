import React from 'react';
import styles from './styles/ThemeContent_hk_bit.module.scss';

const ThemeContent = props => {

    const { content } = props;

    return (
        <div className={styles.title}>{content}</div>
    );

}

export default ThemeContent;