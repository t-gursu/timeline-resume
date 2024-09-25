import React, { useState } from 'react';
import './Filters.css';
import { careerPaths, tags } from './../config';

const Filters = ({ setFilter, setFilterPath, setSearchTerm }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeFilterPath, setActiveFilterPath] = useState("all");

  const handleFilterClick = (filter) => {
    setFilter(filter);
    setActiveFilter(filter);
  };

  const handleFilterPathClick = (filterPath) => {
    setFilterPath(filterPath);
    setActiveFilterPath(filterPath);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="filters-and-search">
      <div className="filters-column">
        <div className="Filters" id='career-filter'>
          Career Paths:
          {careerPaths.map((path) => (
            <button
              key={path.value}
              className={activeFilterPath === path.value ? "active" : ""}
              onClick={() => handleFilterPathClick(path.value)}
            >
              {path.label}
            </button>
          ))}
        </div>

        <div className="Filters" id='tags-filter'>
          Tags:
          {tags.map((tag) => (
            <button
              key={tag.value}
              className={activeFilter === tag.value ? "active" : ""}
              onClick={() => handleFilterClick(tag.value)}
            >
              {tag.label}
            </button>
          ))}
        </div>

        
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          // value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Filters;
