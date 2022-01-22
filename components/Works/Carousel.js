import React, {useState} from 'react';
import Image from "next/image";
import carouselStyles from '../../styles/Works/Carousel.module.scss';
import {ScrollTrigger, Tween} from "react-gsap";

const Carousel = ({projectName, imageLinks}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const rotateCarousel = () => {
    if (carouselIndex + 1 >= imageLinks.length) setCarouselIndex(0);
    else setCarouselIndex(carouselIndex + 1);
  }
  
  return (
    <>
      <ScrollTrigger start='top bottom' end='bottom top' scrub={0.5}>
        <Tween
          from={{
            y: '100px',
            rotation: 20
          }}
          to={{
            y: '-150px',
            rotation: -15
          }}
          duration={2}
          ease={'linear'}>
          <div className={carouselStyles.previewImage} onClick={() => rotateCarousel()}>
            <Image src={`/assets/${projectName}/${imageLinks[carouselIndex]}`} alt={`${projectName} preview`} layout={'fill'}
                   objectFit={'cover'} objectPosition={'center'} placeholder={'blur'}
                   blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMk/r/HwAE7QKAVeiSiAAAAABJRU5ErkJggg=='}/>
          </div>
        </Tween>
      </ScrollTrigger>
    </>
  );
};
export default Carousel;