import React, { useState, useEffect } from 'react';
import loginService from './services/login';
import blogService from './services/blogs';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';
import { useField } from './hooks';

import './App.css';

const App = () => {
  const [username, usernameReset] = useField('type');
  const [password, passwordReset] = useField('password');
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState({
    message: null,
    error: false
  });

  useEffect(() => {
    getBlogs();
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const addBlog = newBlog => {
    console.log(newBlog);
    setBlogs(blogs.concat(newBlog));
  };

  const updateBlog = newBlog => {
    setBlogs(blogs.map(b => (newBlog.id === b.id ? newBlog : b)));
  };

  const removeBlog = blogId => {
    setBlogs(blogs.filter(i => i.id !== blogId));
  };

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      usernameReset();
      passwordReset();
    } catch (exception) {
      setNotificationMessage({
        message: 'wrong username or password, try again!',
        error: true
      });
      setTimeout(() => {
        setNotificationMessage({ message: null, error: false });
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
  };

  const getBlogs = async () => {
    const blogs = await blogService.getAll();
    setBlogs(blogs);
  };

  const loginForm = () => (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input {...username} />
        </div>
        <div>
          password
          <input {...password} />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  );

  const userProfile = () => {
    return (
      <div>
        <p>{user.name} logged in</p>
        {blogs &&
          blogs
            .sort((a, b) => b.likes - a.likes)
            .map(blog => (
              <Blog
                updateBlog={updateBlog}
                removeBlog={removeBlog}
                key={blog.id + user.id}
                blog={blog}
                userId={user.id}
              />
            ))}
        <Togglable buttonLabel='New blog'>
          <BlogForm
            user={user}
            setNotificationMessage={setNotificationMessage}
            addBlog={addBlog}
          />
        </Togglable>
        <br />
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Blogs</h1>
      <Notification
        message={notificationMessage.message}
        error={notificationMessage.error}
      />
      {user ? userProfile() : loginForm()}
    </div>
  );
};

export default App;
