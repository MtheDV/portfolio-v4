import React from 'react';
import stickyContainerStyles from '../../styles/Effects/StickyContainer.module.scss';

const StickyContainer = ({hasBackground, children}) => {
  return (
    <div className={stickyContainerStyles.sticky_container}>
      <div className={stickyContainerStyles.sticky_container__top}>
        <div className={stickyContainerStyles.sticky_container__top_whitespace}></div>
        <div className={stickyContainerStyles.sticky_container__top_border}></div>
      </div>
      <div className={`${stickyContainerStyles.sticky_container__content} ${hasBackground && stickyContainerStyles.sticky_container__content_background}`}>
        {children}
      </div>
      <div className={stickyContainerStyles.sticky_container__bottom}>
        <div className={stickyContainerStyles.sticky_container__bottom_whitespace}></div>
        <div className={stickyContainerStyles.sticky_container__bottom_border}></div>
      </div>
    </div>
  );
};

export default StickyContainer;