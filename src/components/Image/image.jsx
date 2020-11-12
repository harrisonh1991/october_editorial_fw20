import React from 'react';

import LazyLoad from 'react-lazyload';
import styles from './styles/image.module.scss'

const Image = props => {

    const { image, hideMobile, hideDesktop } = props,
    offset = 400;

    var classNameDef = [];
    if(hideMobile)  classNameDef.push(styles.hide_mb);
    if(hideDesktop)  classNameDef.push(styles.hide_pc);

    let once = false , img;
    if(typeof image !== 'undefined'){
        if(typeof image.src !== 'undefined'){
            once = true;
            classNameDef.push(styles.image);
            img = (<img className={classNameDef.join(' ')} src={image.src} alt={image.alt} offset={offset}/>)
        }else{
            let classNameDt = [].concat(classNameDef);
            classNameDef.push(styles.image_mb);
            classNameDt.push(styles.image_dt);
            img = (
                <div>
                    <img className={classNameDef.join(' ')} src={image.mobile} alt={image.alt} offset={offset}/>
                    <img className={classNameDt.join(' ')} src={image.desktop} alt={image.alt} offset={offset}/>
                </div>
            )
        }
    }

    return (
        <LazyLoad once={once} >
            {img}
        </LazyLoad>
    );

}

export default Image;