import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, onDelete }) => {
  return (
    <div className="project-grid-wrapper">
      {projects.length > 0 ? (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={onDelete}  // pass the delete handler down
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No projects match your search. Try a different keyword!</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;