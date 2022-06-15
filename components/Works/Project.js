import React, {useRef, useState} from 'react';
import projectStyles from '../../styles/Works/Project.module.scss';
import Carousel from './Carousel';
import StickyContainer from '../Effects/StickyContainer';
import {Tween} from 'react-gsap';

const Project = ({project}) => {
  const [mouseCoords, setMouseCoords] = useState([0, 0]);
  const [carouselVisible, setCarouselVisible] = useState(false);
  
  const carouselRef = useRef();
  
  const onMouseMove = (event, containerRef) => {
    let mouseX = event.pageX + 20;
    let mouseY = event.pageY + 20 - containerRef.current.offsetTop;
    if (mouseX + carouselRef.current.offsetWidth > window.innerWidth) {
      mouseX = window.innerWidth - carouselRef.current.offsetWidth;
    }
    setMouseCoords([mouseX, mouseY]);
  }
  
  const onMouseEnter = () => {
    setCarouselVisible(true);
  }
  
  const onMouseLeave = () => {
    setCarouselVisible(false);
  }
  
  return (
    <StickyContainer mouseMoveEvent={onMouseMove} mouseEnterEvent={onMouseEnter} mouseLeaveEvent={onMouseLeave}>
      <article className={projectStyles.preview}>
        <div className={projectStyles.descriptionContent}>
          <h3 className={projectStyles.title}>{project.title}</h3>
          <div className={projectStyles.tags}>
            {project.tags.map((tag, index) =>
              <span className={projectStyles.tag} key={`project-tag-${project.name}-${index}`}>{tag}</span>
            )}
          </div>
          <p className={projectStyles.description}>{project.description}</p>
          <p className={projectStyles.note}>{project.note}</p>
          <div className={projectStyles.preview__links}>
            <a href={project.link}
               target={'_blank'}
               rel={'noopener noreferrer'}>
              <button>View on {project.link_title} <span className={'button_arrow button_arrow__horizontal'}>-&gt;</span></button>
            </a>
            {project.website &&
              <a href={project.website}
                 target={'_blank'}
                 rel={'noopener noreferrer'}>
                <button>View on website <span className={'button_arrow button_arrow__horizontal'}>-&gt;</span></button>
              </a>
            }
          </div>
        </div>
        <Tween
          to={{
            x: mouseCoords[0],
            y: mouseCoords[1],
            opacity: carouselVisible ? 1 : 0,
            zIndex: carouselVisible ? 40 : 0
          }}
          duration={0.1}
          ease={'linear'}
        >
          <div className={projectStyles.carousel} ref={carouselRef}>
            <Carousel projectName={project.name} imageLinks={project.images}/>
          </div>
        </Tween>
      </article>
    </StickyContainer>
  );
};

export default Project;