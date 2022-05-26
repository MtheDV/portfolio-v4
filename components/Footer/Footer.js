import React from 'react';
import Image from 'next/image';
import footerStyles from '../../styles/Footer/Footer.module.scss';
import brandingStyles from '../../styles/Branding.module.scss';

import smileWhite from '../../public/assets/smile-white.svg';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <h3 className={footerStyles.branding}>
        <div className={brandingStyles.logo}>
          <Image src={smileWhite} alt={'white smiley'} layout={'responsive'}/>
        </div>
        mathew de vin
      </h3>
    </footer>
  );
};

export default Footer;