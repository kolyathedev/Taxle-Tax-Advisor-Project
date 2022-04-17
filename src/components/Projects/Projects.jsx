import React, { useContext, useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectsItem from './ProjectsItem';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="How it works." />
          {projects.map((project) => {
            const { title, info, info2, info3, info4, info5, url, butText, img, id } = project;

            return (
              <ProjectsItem
                key={id}
                title={title}
                info={info}
                info2={info2}
                info3={info3}
                info4={info4}
                info5={info5}
                url={url}
                butText={butText}
                img={img}
                isDesktop={isDesktop}
                isMobile={isMobile}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
