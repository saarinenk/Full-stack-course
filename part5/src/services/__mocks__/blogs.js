const notes = [
  {
    title: 'Blog Title',
    author: 'Tester',
    url: 'https://https.fi',
    likes: 2,
    user: {
      _id: '5a437a9e514ab7f168ddf138',
      username: 'km1',
      name: 'Katti Matikainen'
    }
  },
  {
    title: 'Blog Title 2',
    author: 'Testy Tester',
    url: 'https://https.fi/2',
    likes: 2,
    user: {
      _id: '5a437a9e514ab7f168ddf139',
      username: 'kk2',
      name: 'Katti Katikainen'
    }
  }
];

const getAll = () => {
  return Promise.resolve(notes);
};

export default { getAll };
