import React, { useState, useEffect } from 'react';
import loginService from './services/login';
import blogService from './services/blogs';
import Blog from './components/Blog';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      setUser(user);
      setUsername('');
      setPassword('');
      getBlogs();
    } catch (exception) {
      console.log('wrong credentials');
    }
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
      </div>
    );
  };

  return (
    <div>
      <h1>Blogs</h1>
      {user ? userProfile() : loginForm()}
    </div>
  );
};

export default App;
