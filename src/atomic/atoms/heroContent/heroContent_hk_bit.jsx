import React from 'react';
import styles from './styles/heroContent_hk_bit.module.scss';

const HeroContent = props => {

    const { content } = props;

    return (
        <div className={styles.content}>{content}</div>
    );

}

export default HeroContent;