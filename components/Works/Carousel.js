import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import carouselStyles from '../../styles/Works/Carousel.module.scss';

const Carousel = ({projectName, imageLinks}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      rotateCarousel();
    }, 3000);
    
    return () => {
      clearInterval(carouselInterval);
    }
  }, [carouselIndex]);
  
  const rotateCarousel = () => {
    if (carouselIndex + 1 >= imageLinks.length) setCarouselIndex(0);
    else setCarouselIndex(index => index + 1);
  }
  
  return (
    <div className={carouselStyles.previewImage} onClick={() => rotateCarousel()}>
      <Image
        src={`/assets/${projectName}/${imageLinks[carouselIndex]}`}
        alt={`${projectName} preview`}
        layout={'fill'}
        objectFit={'cover'}
        objectPosition={'center'}
        placeholder={'blur'}
        blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMk/r/HwAE7QKAVeiSiAAAAABJRU5ErkJggg=='}
      />
    </div>
  );
};
export default Carousel;