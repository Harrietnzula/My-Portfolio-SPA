import React from 'react';
import { Trash2 } from 'lucide-react';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <article className="project-card">
      {/* Image area — only shows if an image URL was provided */}
      {project.image && (
        <div
          className="card-image-container"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div className="card-content">
        {/* Category badge */}
        <div className="card-badge">{project.category}</div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Delete button with trash icon */}
        <button
          className="delete-btn"
          onClick={() => onDelete(project.id)}
          aria-label={`Delete ${project.title}`}
        >
          <Trash2 size={16} />
          Remove
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;