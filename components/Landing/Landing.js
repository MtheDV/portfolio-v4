import React from 'react';
import landingStyles from '../../styles/Landing/Landing.module.scss';
import ToolLogos from './ToolLogos';
import StickyContainer from '../Effects/StickyContainer';

const Landing = ({scrollToWorks}) => {
  
  return (
    <StickyContainer>
      <section className={landingStyles.content}>
        <h1>Hi I&apos;m Mathew de Vin</h1>
        <p>
          An in the works creative front<br/>
          end developer and designer.<br/>
          Inspired by the aesthetics.
        </p>
        <button onClick={scrollToWorks}>Check out my works -&gt;</button>
        <ToolLogos/>
      </section>
    </StickyContainer>
  );
};

export default Landing;