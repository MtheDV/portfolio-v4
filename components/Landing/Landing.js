import React from 'react';
import landingStyles from '../../styles/Landing/Landing.module.scss';
import ToolLogos from './ToolLogos';
import StickyContainer from '../Effects/StickyContainer';

const Landing = ({scrollToWorks}) => {
  
  return (
    <StickyContainer>
      <section className={landingStyles.content}>
        <h1>Hi I&apos;m Mathew de Vin</h1>
        <div className={landingStyles.content__intro}>
          <p>
            Developing for the web.
          </p>
          <p>
            A creative front end
            engineer and designer.
          </p>
          <p>
            Inspired by the aesthetics.
          </p>
        </div>
        <div className={landingStyles.content__actions}>
          <button onClick={scrollToWorks}>
            Check out my projects&nbsp;
            <span className={'button_arrow button_arrow__vertical'}>↓</span>
          </button>
          <a
            href={'/assets/resume/resume-mathew-de-vin.pdf'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <button>View my resume <span className={'button_arrow button_arrow__horizontal'}>-&gt;</span></button>
          </a>
        </div>
        <ToolLogos/>
      </section>
    </StickyContainer>
  );
};

export default Landing;