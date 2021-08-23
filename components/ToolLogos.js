import React from 'react';
import Image from 'next/image';
import toolLogoStyles from '../styles/ToolLogos.module.scss';
import affinityLogo from '../public/assets/landing/affinity.svg';
import cssLogo from '../public/assets/landing/css.svg';
import djangoLogo from '../public/assets/landing/django.svg';
import htmlLogo from '../public/assets/landing/html.svg';
import javascriptLogo from '../public/assets/landing/javascript.svg';
import nextLogo from '../public/assets/landing/next.svg';
import pythonLogo from '../public/assets/landing/python.svg';
import reactLogo from '../public/assets/landing/react.svg';
import sassLogo from '../public/assets/landing/sass.svg';

const ToolLogos = () => {
  return (
    <>
      <p className={toolLogoStyles.title}><small>Some tools I&apos;m working with:</small></p>
      <div className={toolLogoStyles.container}>
        <div className={toolLogoStyles.javascriptLogo}>
          <Image src={javascriptLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.htmlLogo}>
          <Image src={htmlLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.cssLogo}>
          <Image src={cssLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.sassLogo}>
          <Image src={sassLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.nextLogo}>
          <Image src={nextLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.reactLogo}>
          <Image src={reactLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.affinityLogo}>
          <Image src={affinityLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.djangoLogo}>
          <Image src={djangoLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
        <div className={toolLogoStyles.pythonLogo}>
          <Image src={pythonLogo} alt={'javascript'} layout={'responsive'}/>
        </div>
      </div>
    </>
  );
};

export default ToolLogos;