import React, { useState } from 'react';
import blogService from '../services/blogs';

const BlogForm = ({ user }) => {
  const [title, changeTitle] = useState('');
  const [author, changeAuthor] = useState('');
  const [url, changeUrl] = useState('');

  const onSubmit = async () => {
    const blog = {
      title: title,
      author: author,
      url: url,
      likes: 0,
      user: user.id
    };

    try {
      await blogService.create(blog);
      changeTitle('');
      changeUrl('');
      changeAuthor('');
    } catch {
      console.log('error');
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
