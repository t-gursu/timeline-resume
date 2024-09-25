import React from 'react';
import { Link } from 'react-router-dom';
import blogSummaries from '../data/blogData';

const Blog = () => {
    return (
        <div>
            <h1 className="blog-title">What I Learned</h1>
            <p>You will find some information about ......</p>
            {blogSummaries.map((blog) => (
                <div key={blog.id} className="blog-item">
                    <h2 className="blog-item-title">
                        <Link to={`/blog/${blog.id}`} className="blog-link">{blog.title}</Link>
                    </h2>
                    <p className="blog-summary">{blog.summary}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
