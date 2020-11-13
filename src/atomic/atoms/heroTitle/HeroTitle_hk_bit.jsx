import React from 'react';
import styles from './styles/HeroTitle_hk_bit.module.scss';

const HeroTitle = props => {

    const { title } = props;

    return (
    <h1 className={styles.title}>{title}</h1>
    );

}

export default HeroTitle;