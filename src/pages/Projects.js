import React from 'react';
import { Link } from 'react-router-dom';
import projectSummaries from '../data/projectData';

const Projects = () => {
    return (
        <div>
            <h1 className="blog-title">What I Learned</h1>
            <p>You will find some information about ......</p>
            {projectSummaries.map((project) => (
                <div key={project.id} className="blog-item">
                    <h2 className="blog-item-title">
                        <Link to={`/blog/${project.id}`} className="blog-link">{project.title}</Link>
                    </h2>
                    <p className="blog-summary">{project.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;
