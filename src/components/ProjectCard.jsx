import React from 'react';
import { ExternalLink } from 'lucide-react'; // Optional: for a nice "view" icon

const ProjectCard = ({ project, onClick, onDelete }) => {
  return (
    <article className="project-card">
      <div className="card-image-container">
        
        <div className="card-badge">{project.category}</div>
        <div className="card-overlay">
          <button className="card-button" onClick={() => onDelete(project.id)}>
            
            {/*Trash icon here*/}
          </button>

        </div>
      </div>
      
      <div className="card-content">
        <div className="card-image" style={{ backgroundImage: `url(${project.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
            <h3>{project.title}</h3>
        <p>{project.description}</p>
      
      </div>
    </article>
  );
};

export default ProjectCard;