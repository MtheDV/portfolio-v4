import React from 'react';
import Image from 'next/image';
import projectStyles from '../../styles/Works/Project.module.scss';
import {Tween, ScrollTrigger} from "react-gsap";

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
        <a href={project.link}
           target={'_blank'}
           rel={'noopener noreferrer'}>
          <button>View on {project.link_title} -&gt;</button>
        </a>
      </div>
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
          <div className={projectStyles.image}>
            <Image src={`/assets/${project.name}/${project.images[0]}`} alt={'project screenshot'} layout={'fill'}
                   objectFit={'cover'} objectPosition={'center'} placeholder={'blur'}
                   blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMk/r/HwAE7QKAVeiSiAAAAABJRU5ErkJggg=='}/>
          </div>
        </Tween>
      </ScrollTrigger>
    </div>
  );
};

export default Project;