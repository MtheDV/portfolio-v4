import React from 'react';
import projectStyles from '../../styles/Works/Project.module.scss';
import Carousel from './Carousel';
import StickyContainer from '../Effects/StickyContainer';

const Project = ({project}) => {
  
  return (
    <StickyContainer>
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
        <div className={projectStyles.carousel}>
          <Carousel projectName={project.name} imageLinks={project.images}/>
        </div>
      </article>
    </StickyContainer>
  );
};

export default Project;