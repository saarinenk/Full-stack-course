import React, { useState, useEffect } from 'react';
import loginService from './services/login';
import blogService from './services/blogs';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';

import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (exception) {
      setNotificationMessage({
        message: `wrong username or password, try again!`,
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
          <input
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  );

  const userProfile = () => {
    return (
      <div>
        <p>{user.name} logged in</p>
        {blogs && blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
        <BlogForm user={user} setNotificationMessage={setNotificationMessage} />
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
