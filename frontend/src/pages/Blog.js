import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'My Journey in AI & ML',
    date: 'June 2025',
    summary: 'Sharing how I started with AI/ML, my projects, and what I learned along the way.',
    content: 'Full content of My Journey in AI & ML...'
  },
  {
    id: 2,
    title: 'Building with MERN Stack',
    date: 'May 2025',
    summary: 'Tips and insights from creating full-stack apps using MongoDB, Express, React, and Node.js.',
    content: 'Full content of Building with MERN Stack...'
  },
  {
    id: 3,
    title: 'Participating in Hackathons',
    date: 'April 2025',
    summary: 'Why hackathons are great for growth, and my personal experiences.',
    content: 'Full content of Participating in Hackathons...'
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>My Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
export { blogPosts }; // Export posts for use in PostDetails
