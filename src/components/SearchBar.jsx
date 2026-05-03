import React from 'react';
import './SearchBar.css'; // Import your plain CSS file here

function SearchBar({
  searchQuery,
  onSearchChange,
  categories = ['All', 'Branding','Modeling', 'Design'],
  activeFilter,
  onFilterChange,
  resultCount,
}) {
  return (
    <div className="search-container">
      {/* Search Input Area */}
      <div className="search-input-wrapper">
        <SearchIcon className="search-icon" />
        <input
          type="search"
          className="search-field"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div>
      <button className="submit-btn">Submit</button>
      </div>


      {/* Filter and Info Area */}
      <div className="search-meta">
        <div className="filter-group">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => onFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="result-count">
          {resultCount} {resultCount === 1 ? 'project' : 'projects'}
        </span>
      </div>
    </div>
  );
}


function SearchIcon({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      
    </svg>
  );
}

export default SearchBar;