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
      image: "",
    },
    {
      id: 2,
      title: "E-commerce Product Modeling",
      category: "Web Design",
      description: "Responsive landing page for a tech startup.",
      image: "",
    },
  ]);

  // 2. State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // 3. State for active category filter
  const [activeFilter, setActiveFilter] = useState("All");

  // 4. Add a new project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // 5. Delete a project by id
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // 6. Filter projects based on search query AND active category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || project.category === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <div className="dashboard-layout">
          <aside className="sidebar">
            {/* Pass correct prop names that SearchBar expects */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              resultCount={filteredProjects.length}
            />
            <ProjectForm addProject={addProject} />
          </aside>
          <main className="content">
            {/* Pass deleteProject down to ProjectList */}
            <ProjectList
              projects={filteredProjects}
              onDelete={deleteProject}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;