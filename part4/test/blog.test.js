const listHelper = require('../utils/list_helper');

test('dummy returns one', () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  const listWithBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 13,
      __v: 0
    }
  ];

  test('Total likes function to return a correct number', () => {
    const result = listHelper.totalLikes(listWithBlogs);
    expect(result).toBe(18);
  });

  test('Returns an empty array if no blogs are given', () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toEqual([]);
  });
});

describe('favorite blog', () => {
  const listWithBlogs = [
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Some text here',
      author: 'Edsger W. Wijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 13,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Other text here',
      author: 'Edsger W. Zijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 200,
      __v: 0
    }
  ];

  test('FavoriteBlog function to return the author with the blog with most votes', () => {
    const result = listHelper.favoriteBlog(listWithBlogs);
    expect(result).toBe(listWithBlogs[2]);
  });

  test('Returns an empty array if no blogs are given', () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toEqual([]);
  });
});

describe('most blogs', () => {
  const listWithBlogs = [
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Some text here',
      author: 'Edsger W. Wijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 13,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Other text here',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 200,
      __v: 0
    }
  ];

  test('mostLikes function to return the author with the blog with most likes', () => {
    const result = listHelper.mostBlogs(listWithBlogs);
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 2 });
  });

  test('Returns an empty array if no blogs are given', () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toEqual([]);
  });
});

describe('most likes', () => {
  const listWithBlogs = [
    {
      _id: '5a422aa71b54a676234d17f7',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Some text here',
      author: 'Edsger W. Wijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 13,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Other text here',
      author: 'Edsger W. Dijkstra',
      url:
        'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 200,
      __v: 0
    }
  ];

  test('mostLikes function to return the author with the blog with most likes', () => {
    const result = listHelper.mostLikes(listWithBlogs);
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', likes: 205 });
  });

  test('Returns an empty array if no blogs are given', () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toEqual([]);
  });
});
