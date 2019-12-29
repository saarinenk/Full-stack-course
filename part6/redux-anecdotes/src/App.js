import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import { voteAnecdote } from './reducers/anecdoteReducer';

const App = props => {
  const anecdotes = props.store.getState();

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
      <AnecdoteForm store={props.store} />
    </div>
  );
};

export default App;
