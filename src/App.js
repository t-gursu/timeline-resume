import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Filters from './components/Filters';
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Blog from './pages/Blog';
import BlogPostPage from './components/BlogPostPage';

import Project from './pages/Projects';
import ProjectPostPage from './components/ProjectPostPage';

import timelineDataEn from "./data/timelineData-en.js";
import timelineDataDe from "./data/timelineData-de.js";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      easing: 'fade-up',
      once: true,
    });
  }, []);

  const [filter, setFilter] = useState("all");
  const [filterPath, setFilterPath] = useState("all");
  const [language, setLanguage] = useState('en');
  const [searchTerm, setSearchTerm] = useState("");

  const timelineData = language === 'en' ? timelineDataEn : timelineDataDe;

  const filteredTimeline = timelineData.filter(item => {
    const filterMatch = filter === "all" || item.tag.includes(filter);
    const filterPathMatch = filterPath === "all" || item.path.includes(filterPath);
    const searchedMatch = searchTerm === "" || (item.details).toLowerCase().includes(searchTerm.toLowerCase());
    return filterMatch && filterPathMatch && searchedMatch;
  });

  const changeLanguage = (lng) => {
    setLanguage(lng);
  };

  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <div className="sidebar-container">
            <Sidebar language={language} changeLanguage={changeLanguage} />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={
                <>
                  <div className="filters-timeline-container">
                    
                    <div class="social-menu-mobile">
                      <ul>
                        <li><a href="https://github.com/t-gursu" target="blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/hiagaga/" target="blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/gursutoparlak/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>

                    <Filters setFilter={setFilter} setFilterPath={setFilterPath} setSearchTerm={setSearchTerm} />
                    <Timeline data={filteredTimeline} data-aos="fade-up" />
                  </div>
                </>
              } />
              <Route exact path="/blog" Component={Blog} />
              <Route path="/blog/:id" Component={BlogPostPage} />

              <Route exact path="/projects" Component={Project} />
              <Route path="/projects/:id" Component={ProjectPostPage} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
