import React from 'react';
import projectStyles from '../../styles/Works/Project.module.scss';
import Carousel from "./Carousel";

const Project = ({project}) => {
  
  return (
    <div className={projectStyles.preview}>
      <div className={projectStyles.descriptionContent}>
        <h3 className={projectStyles.title}>{project.title}</h3>
        <div className={projectStyles.tags}>
          {project.tags.map((tag, index) =>
            <span className={projectStyles.tag} key={`project-tag-${project.name}-${index}`}>{tag}</span>
          )}
        </div>
        <p className={projectStyles.description}>{project.description}</p>
        <p className={projectStyles.note}>{project.note}</p>
        <a href={project.link}
           target={'_blank'}
           rel={'noopener noreferrer'}>
          <button>View on {project.link_title} -&gt;</button>
        </a>
      </div>
      <div className={projectStyles.carousel}>
        <Carousel projectName={project.name} imageLinks={project.images}/>
      </div>
    </div>
  );
};

export default Project;