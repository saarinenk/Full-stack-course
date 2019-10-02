const Blog = require('../models/blog');
const User = require('../models/user');

const initialBlogs = [
  {
    title: 'Blogi 1',
    author: 'Keijo Keijola',
    url: 'https://url.fi/1',
    likes: 3
  },
  {
    title: 'Blogi 2',
    author: 'Kaija Kaijala',
    url: 'https://url.fi/2',
    likes: 8
  }
];

const blogsInDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map(u => u.toJSON());
};

module.exports = { initialBlogs, blogsInDB, usersInDb };
