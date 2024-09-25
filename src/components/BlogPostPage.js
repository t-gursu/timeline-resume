import React from 'react';
import './BlogPostPage.css';
import { useParams } from 'react-router-dom';
import blogSummaries from '../data/blogData';

const BlogPostPage = () => {
    const { id } = useParams();
    const blog = blogSummaries.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return <h2>Blog post not found</h2>;
    }

    const BlogComponent = blog.component;

    return (
        <div className="blog-post-container">
            <h1 className="blog-post-title">{blog.title}</h1>
            <BlogComponent />
        </div>
    );
};

export default BlogPostPage;
