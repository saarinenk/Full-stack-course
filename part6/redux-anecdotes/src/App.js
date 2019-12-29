import React from 'react';
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer';

const App = props => {
  const anecdotes = props.store.getState();

  const newAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.store.dispatch(createAnecdote(content));
  };

  console.log(anecdotes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id + anecdote.votes}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => props.store.dispatch(voteAnecdote(anecdote.id))}
              >
                vote
              </button>
            </div>
          </div>
        ))}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

export default App;
