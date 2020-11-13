import React from 'react';
import styles from './styles/ThemeTitle_bit_hk.module.scss';

const ThemeTitle = props => {

    const { content } = props;

    return (
        <h2 className={styles.title}>{content}</h2>
    );

}

export default ThemeTitle;