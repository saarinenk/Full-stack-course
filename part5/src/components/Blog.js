import React, { useState } from 'react';
import blogService from '../services/blogs';

import '../App.css';

const Blog = ({ blog, updateBlog, removeBlog, userId }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const addLike = () => {
    const newBlog = {
      ...blog,
      likes: blog.likes + 1
    };

    blogService.update(newBlog);
    updateBlog(newBlog);
  };

  const remove = () => {
    if (window.confirm(`Do you want to detele ${blog.title}?`)) {
      blogService.deleteBlog(blog);
      removeBlog(blog.id);
    }
  };

  const hide = { display: 'none' };

  return (
    <div className='blog'>
      <div onClick={toggleOpen}>
        <b>
          {blog.title} – {blog.author}
        </b>
      </div>
      <div style={open ? {} : hide}>
        <a href={blog.url}>{blog.url}</a>
        <div className='inline'>
          <p>Likes: {blog.likes}</p>
          <button onClick={addLike}>like</button>
        </div>
        <p>Added by: {blog.user.name}</p>
        {blog.user.id === userId ? (
          <button onClick={remove}>Delete blog</button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Blog;
