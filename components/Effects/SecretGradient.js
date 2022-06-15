import React from 'react';
import gradientStyles from '../../styles/Effects/SecretGradient.module.scss';

const SecretGradient = () => {
  return (
    <div className={gradientStyles.secret_gradient}>
      <div className={gradientStyles.secret_gradient__body}/>
      <div className={gradientStyles.secret_gradient__body_2}/>
    </div>
  );
};

export default SecretGradient;