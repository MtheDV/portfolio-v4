import React from 'react';
import landingStyles from '../styles/Landing.module.scss';
import ToolLogos from "./ToolLogos";

const Landing = ({scrollToWorks}) => {

  return (
    <section className={landingStyles.landing}>
      <div className={landingStyles.content}>
        <h1>Hi I&apos;m Mathew de Vin</h1>
        <p>
          An in the works creative full<br/>
          stack developer, designer, and<br/>
          student.
        </p>
        <button onClick={scrollToWorks}>Check out my works -&gt;</button>
        <ToolLogos/>
      </div>
    </section>
  );
};

export default Landing;