import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from '../../atoms/image/Image';

const LazyloadImage = props => {

    const { once, offset, image } = props;

    return (
        <LazyLoad once={once} offset={offset}>
            <Image  {...image } />
        </LazyLoad>
    );

}

export default LazyloadImage;