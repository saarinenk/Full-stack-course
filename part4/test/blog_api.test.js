const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/blog');
const helper = require('./test_helper');

const api = supertest(app);

beforeEach(async () => {
  await Blog.deleteMany({});

  let blogObject = new Blog(helper.initialBlogs[0]);
  await blogObject.save();

  blogObject = new Blog(helper.initialBlogs[1]);
  await blogObject.save();
});

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('blogs have field called id', async () => {
  const response = await api.get('/api/blogs');

  expect(response.body[0].id).toBeDefined;
});

test('blogs can be added successfully', async () => {
  const newBlog = {
    title: 'Blogi uusi',
    author: 'Uusi Uusinen',
    url: 'https://url.fi/uusi',
    likes: 0
  };
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201);

  const response = await api.get('/api/blogs');

  expect(response.body.length).toBe(helper.initialBlogs.length + 1);
});

test('blogs without likes get 0 likes', async () => {
  const newBlog = {
    title: 'Blogi uusi',
    author: 'Uusi Uusinen',
    url: 'https://url.fi/uusi'
  };
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201);

  const response = await api.get('/api/blogs');

  expect(response.body[2].likes).toBe(0);
});

test('blogs cannot be posted without title or url', async () => {
  const newBlog = {
    author: 'Uusi Uusinen',
    url: 'https://url.fi/uusi',
    likes: 3
  };
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400);

  const newBlog2 = {
    title: 'test title',
    author: 'Uusi Uusinen',
    likes: 3
  };
  await api
    .post('/api/blogs')
    .send(newBlog2)
    .expect(400);
});

test('blogs can be deleted with id', async () => {
  const blogsAtStart = await helper.blogsInDB();
  const blogToDelete = blogsAtStart[0];

  console.log(blogToDelete.id);

  await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

  const response = await api.get('/api/blogs');

  expect(response.body.length).toBe(helper.initialBlogs.length - 1);
});

afterAll(() => {
  mongoose.connection.close();
});
