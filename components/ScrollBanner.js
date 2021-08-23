import React from 'react';
import {Tween, ScrollTrigger} from "react-gsap";
import scrollBannerStyles from '../styles/ScrollBanner.module.scss';

const ScrollBanner = ({refProp, text, light}) => {
  return (
    <div ref={refProp} className={`${scrollBannerStyles.background} ${light ? scrollBannerStyles.backgroundLight : ''}`}>
      <ScrollTrigger start='-400px bottom' end='400px end' scrub={0.5}>
        <Tween
          to={{
            x: '-600px'
          }}
          duration={3}
          ease={'linear'}>
          {[...Array(10)].map((e, index) =>
            <span className={`${scrollBannerStyles.text} ${light ? scrollBannerStyles.textLight : ''}`} key={`${text}-${index}`}>{text}</span>
          )}
        </Tween>
      </ScrollTrigger>
    </div>
  );
};

export default ScrollBanner;