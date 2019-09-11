const _ = require('lodash');

const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  if (blogs.length === 0) return [];
  return blogs.reduce((acc, curr) => acc + curr.likes, 0);
};

const favoriteBlog = blogs => {
  if (blogs.length === 0) return [];
  return blogs.reduce((acc, curr) => (curr.likes > acc.likes ? curr : acc));
};

const mostBlogs = blogs => {
  if (blogs.length === 0) return [];
  const grouped = _.countBy(blogs, a => a.author);
  return Object.entries(grouped).reduce((acc, curr) => {
    if (!acc || acc.blogs < curr[1]) {
      return { author: curr[0], blogs: curr[1] };
    } else {
      return acc;
    }
  }, false);
};

const sumLikes = arr => {
  return arr ? arr.reduce((acc, curr) => acc + curr.likes, 0) : 0;
};

const mostLikes = blogs => {
  if (blogs.length == 0) return [];
  return Object.entries(_.groupBy(blogs, a => a.author))
    .map(i => ({ author: i[0], likes: sumLikes(i[1]) }))
    .sort((a, b) => b.likes - a.likes)[0];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
