import React, { useState } from 'react';
import blogService from '../services/blogs';

const BlogForm = ({ user, setNotificationMessage, addBlog }) => {
  const [title, changeTitle] = useState('');
  const [author, changeAuthor] = useState('');
  const [url, changeUrl] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const blog = {
      title: title,
      author: author,
      url: url,
      likes: 0,
      user: user.id
    };

    try {
      await blogService.create(blog);
      setNotificationMessage({
        message: `Blog ${title} by ${author} added`,
        error: false
      });
      setTimeout(() => {
        setNotificationMessage({ message: null, error: false });
      }, 5000);
      addBlog(blog);
      changeTitle('');
      changeUrl('');
      changeAuthor('');
    } catch (error) {
      console.log('error ', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h3>Add a new blog</h3>
        title:{' '}
        <input
          value={title}
          onChange={({ target }) => changeTitle(target.value)}
        />
        <br />
        author:{' '}
        <input
          value={author}
          onChange={({ target }) => changeAuthor(target.value)}
        />
        <br />
        url{' '}
        <input value={url} onChange={({ target }) => changeUrl(target.value)} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default BlogForm;
