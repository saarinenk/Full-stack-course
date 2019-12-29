import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes;

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id + anecdote.votes}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  props.store.dispatch(voteAnecdote(anecdote.id));
                  props.store.dispatch(
                    setNotification('You voted for: ' + anecdote.content)
                  );
                  setTimeout(() => {
                    props.store.dispatch(setNotification(null));
                  }, 5000);
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnecdoteList;
