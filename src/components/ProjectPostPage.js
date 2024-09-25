import React from 'react';
import './BlogPostPage.css';
import { useParams } from 'react-router-dom';
import projectSummaries from '../data/projectData';

const ProjectPostPage = () => {
    const { id } = useParams();
    const project = projectSummaries.find((project) => project.id === parseInt(id));

    if (!project) {
        return <h2>Project post not found</h2>;
    }

    const ProjectComponent = project.component;

    return (
        <div className="blog-post-container">
            <h1 className="blog-post-title">{project.title}</h1>
            <ProjectComponent />
        </div>
    );
};

export default ProjectPostPage;
