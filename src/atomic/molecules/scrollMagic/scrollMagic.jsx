import React, { useEffect, useState, useRef } from 'react';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import * as ScrollMagic from "scrollmagic";
import { TweenMax, Sine } from "gsap";
import { useMediaQuery } from 'react-responsive';

ScrollMagicPluginGsap(ScrollMagic, TweenMax);

const ScrollMagic = props => {
    
    const containerRef = useRef(null);

    let controller;
    let [desktopDevice, setDesktopDevice] = useState(useMediaQuery({
        query: '(min-width: 1024px)'
    }));
    let defaultStyles = desktopDevice ? { transform: 'translate(0, -30%) scale(0.25)' } : {}

    useEffect(() => {
        if(desktopDevice) {
            controller = new ScrollMagic.Controller();

            new ScrollMagic.Scene({
                triggerElement: containerRef.current,
                triggerHook: "onLeave",
                duration: "100%",
            })
            .setPin(containerRef.current)
            .on("progress", onPinScrollProgress)
            .addTo(controller);
        }
    }, []);

    onPinScrollProgress = e => {
        let scaleProgress = Math.min(1, e.progress / 0.8 * 0.75 + 0.25);
        let yProgress = Math.max(0, 1 - e.progress / 0.8 * 30);
        let progress = Math.min(1, e.progress / 0.8);
     
        TweenMax.to(containerRef.current, 0.2, { scale: scaleProgress, rotation: progress * 360, y: yProgress*-1 + "%", ease: Sine.Out });
    }


    return (
        <div className={styles['header-position']} ref={containerRef} style={defaultStyles}>
            {{children}} 
        </div>
    );
};