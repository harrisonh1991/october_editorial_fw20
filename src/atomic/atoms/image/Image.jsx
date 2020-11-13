import React from 'react';
import styles from './styles/image.module.scss';

const Hero = props => {

    const { alt, desktop, mobile, src } = props;

    return (
        (src)? 
            <img alt={alt} src={src} className={styles.image}/>:
            <>
                <img alt={alt} src={mobile} className={styles.image__mobile}/>
                <img alt={alt} src={desktop} className={styles.image__desktop}/>
            </>
    );

}

export default Hero;