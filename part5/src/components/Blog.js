import React, { useState } from 'react';

import '../App.css';

const Blog = ({ blog }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  console.log(blog);

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
          <button>like</button>
        </div>
        <p>Added by: {blog.user.name}</p>
      </div>
    </div>
  );
};

export default Blog;
