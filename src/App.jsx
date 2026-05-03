import React, { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  // 1. Central state for all projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Art Gallery Identity",
      category: "Branding",
      description: "A minimalist visual identity for a modern art gallery.",
    },
    {
      id: 2,
      title: "E-commerce Product Modeling",
      category: "Web Design",
      description: "Responsive landing page for a tech startup.",
    },
  ]);

  // 2. State for searching/filtering
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Function to add a new project dynamically
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // 4. Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <div className="dashboard-layout">
          <aside className="sidebar">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ProjectForm addProject={addProject} />
          </aside>

          <main className="content">
            <ProjectList projects={filteredProjects} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;