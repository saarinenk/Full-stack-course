import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { render, fireEvent } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

test('renders content', () => {
  const blog = {
    title: 'Blog Title',
    author: 'Tester',
    url: 'https://https.fi',
    likes: 2,
    user: '1'
  };

  const component = render(<SimpleBlog blog={blog} />);

  expect(component.container).toHaveTextContent(blog.title);
  expect(component.container).toHaveTextContent(blog.author);
  expect(component.container).toHaveTextContent(`blog has ${blog.likes} likes`);
});

test('If button is clicked twice, mockHandler gets two calls', () => {
  const blog = {
    title: 'Blog Title',
    author: 'Tester',
    url: 'https://https.fi',
    likes: 2,
    user: '1'
  };

  const mockHandler = jest.fn();

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  );

  const button = getByText('like');
  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockHandler.mock.calls.length).toBe(2);
});
