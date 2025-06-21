import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';
import '../css/PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="post-container">
        <h2>Post Not Found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="post-container">
      <h2>{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <p>{post.content}</p>
      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
};

export default PostDetails;
