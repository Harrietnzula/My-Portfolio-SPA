import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const ProjectForm = ({ addProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.category) return;

    // Call the parent function we defined in App.jsx
    addProject(formData);

    // Reset form fields
    setFormData({ title: '', category: '', description: '', image: '' });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
        <input 
          type="text" 
          placeholder="Category (e.g. Web Design)"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
          required
        />
      </div>
      <textarea 
        placeholder="Brief Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <input 
        type="url" 
        placeholder="Image URL (https://...)"
        value={formData.image}
        onChange={(e) => setFormData({...formData, image: e.target.value})}
      />
      <button type="submit" className="submit-btn">
        <PlusCircle size={18} /> Add to Portfolio
      </button>
    </form>
  );
};

export default ProjectForm;