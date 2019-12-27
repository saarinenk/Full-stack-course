import React from 'react';
import blogService from '../services/blogs';
import { useField } from '../hooks';

const BlogForm = ({ user, setNotificationMessage, addBlog }) => {
  const [title, titleReset] = useField('text');
  const [author, authorReset] = useField('text');
  const [url, urlReset] = useField('text');

  const onSubmit = async e => {
    e.preventDefault();
    const blog = {
      title: title.value,
      author: author.value,
      url: url.value,
      likes: 0,
      user: user.id
    };

    try {
      await blogService.create(blog);
      setNotificationMessage({
        message: `Blog ${title.value} by ${author.value} added`,
        error: false
      });
      setTimeout(() => {
        setNotificationMessage({ message: null, error: false });
      }, 5000);
      addBlog(blog);
      titleReset();
      authorReset();
      urlReset();
    } catch (error) {
      console.log('error ', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h3>Add a new blog</h3>
        title: <input {...title} />
        <br />
        author: <input {...author} />
        <br />
        url <input {...url} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default BlogForm;
