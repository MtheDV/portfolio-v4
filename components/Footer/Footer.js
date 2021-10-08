import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerStyles from '../../styles/Footer/Footer.module.scss';
import brandingStyles from '../../styles/Branding.module.scss';

import smileWhite from '../../public/assets/smile-white.svg';
import ScrollBanner from "../Effects/ScrollBanner";

const Footer = () => {
  return (
    <>
      <ScrollBanner text={'CONTACT'}/>
      <footer className={footerStyles.footer}>
        <ul className={footerStyles.links}>
          <li>
            <Link href={'mailto:mathewdevin03@gmail.com'}
                  target={"_blank"}
                  rel={'noopener noreferrer'}>
              <a>email</a>
            </Link>
          </li>
          <li>
            <Link href={'https://www.linkedin.com/in/mathew-de-vin'}
                  target={"_blank"}
                  rel={'noopener noreferrer'}>
              <a>linked in</a>
            </Link>
          </li>
          <li>
            <Link href={'https://github.com/MtheDV'}
                  target={"_blank"}
                  rel={'noopener noreferrer'}>
              <a>github</a>
            </Link>
          </li>
        </ul>
        <h3 className={footerStyles.branding}>
          <div className={brandingStyles.logo}>
            <Image src={smileWhite} alt={'white smiley'} layout={'responsive'}/>
          </div>
          mathew de vin
        </h3>
      </footer>
    </>
  );
};

export default Footer;