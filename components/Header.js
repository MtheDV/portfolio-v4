import React from 'react';
import headerStyles from "../styles/Header.module.scss";
import Link from "next/link";
import brandingStyles from "../styles/Branding.module.scss";
import Image from "next/image";
import smileWhite from "../public/assets/smile-white.svg";
import {Tween} from "react-gsap";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.scrollingNames}>
        <Tween
          to={{
            x: '-100%'
          }}
          duration={3}
          ease={'linear'}
          repeat={'-1'}>
          {[...Array(6)].map((e, index) =>
            <span key={`header-${index}`} className={headerStyles.branding}>
              <div className={brandingStyles.logo}>
                <Image src={smileWhite} alt={'black smiley'} layout={'responsive'}/>
              </div>
              mathew de vin
            </span>
          )}
        </Tween>
      </div>
    </header>
  );
};

export default Header;