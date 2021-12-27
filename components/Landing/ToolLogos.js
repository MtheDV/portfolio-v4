import React from 'react';
import Image from 'next/image';
import toolLogoStyles from '../../styles/Landing/ToolLogos.module.scss';
import angularLogo from '../../public/assets/landing/angular.svg';
import cssLogo from '../../public/assets/landing/css.svg';
import djangoLogo from '../../public/assets/landing/django.svg';
import htmlLogo from '../../public/assets/landing/html.svg';
import typescriptLogo from '../../public/assets/landing/typescript.svg';
import nextLogo from '../../public/assets/landing/next.svg';
import pythonLogo from '../../public/assets/landing/python.svg';
import reactLogo from '../../public/assets/landing/react.svg';
import sassLogo from '../../public/assets/landing/sass.svg';

const ToolLogos = () => {
  return (
    <>
      <p className={toolLogoStyles.title}><small>Some tools I&apos;m working with:</small></p>
      <div className={toolLogoStyles.container}>
        <div className={toolLogoStyles.typescriptLogo}>
          <Image src={typescriptLogo} alt={'typescript'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.htmlLogo}>
          <Image src={htmlLogo} alt={'html'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.cssLogo}>
          <Image src={cssLogo} alt={'css'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.sassLogo}>
          <Image src={sassLogo} alt={'sass'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.nextLogo}>
          <Image src={nextLogo} alt={'nextJs'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.reactLogo}>
          <Image src={reactLogo} alt={'reactJs'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.angularLogo}>
          <Image src={angularLogo} alt={'angular'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.djangoLogo}>
          <Image src={djangoLogo} alt={'django'} layout={'responsive'} priority={true}/>
        </div>
        <div className={toolLogoStyles.pythonLogo}>
          <Image src={pythonLogo} alt={'python'} layout={'responsive'} priority={true}/>
        </div>
      </div>
    </>
  );
};

export default ToolLogos;