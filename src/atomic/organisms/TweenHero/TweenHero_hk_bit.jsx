import React from 'react';
import styles from './styles/ThemeTitle_bit_hk.module.scss';
import HeroTitle from '../../atoms/HeroTitle/heroTitle_hk_bit';
import HeroContent from '../../atoms/heroContent/heroContent_hk_bit';
import Image from '../../atoms/image/Image';

const TweenHero = props => {

    const { title, content, image } = props;

    return (
        <div style={styles.container}>
            
            <Image {...image}/>
            <div style={styles.content}>
                <HeroTitle title={title} />
                <HeroContent content={content} />
            </div>
        </div>
    );

}

export default TweenHero;