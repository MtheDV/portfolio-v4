import React from 'react';
import Project from "./Project";
import workStyles from '../../styles/Works/Works.module.scss';
import ScrollBanner from "../Effects/ScrollBanner";

const Works = ({refProp, projects}) => {
  return (
    <>
      <ScrollBanner refProp={refProp} text={'PROJECTS'}/>
      <section className={workStyles.works}>
        {projects.map((project, index) =>
          <Project key={`${project.name}-${index}`} project={project}/>
        )}
      </section>
    </>
  );
};

export default Works;