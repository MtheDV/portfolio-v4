import React from 'react';
import {Tween} from "react-gsap";
import spinnerStyles from '../styles/Spinner.module.scss';

const Spinner = () => {
  return (
    <Tween to={{rotation: 360}} ease={'linear'} duration={1} repeat={-1}>
      <div className={spinnerStyles.spinner}/>
    </Tween>
  );
};

export default Spinner;