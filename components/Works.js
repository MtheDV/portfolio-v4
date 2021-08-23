import React from 'react';
import Project from "./Project";
import workStyles from '../styles/Works.module.scss';
import ScrollBanner from "./ScrollBanner";

const Works = ({refProp, projects}) => {
  return (
    <>
      <ScrollBanner refProp={refProp} text={'WORKS'}/>
      <section className={workStyles.works}>
        {projects.map((project, index) =>
          <Project key={`${project.name}-${index}`} project={project}/>
        )}
      </section>
    </>
  );
};

export default Works;