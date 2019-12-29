import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {
  const anecdotes = props.store.getState().anecdotes;
  const filter = props.store.getState().filter.text;

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .filter(
          i => !filter || i.content.toLowerCase().includes(filter.toLowerCase())
        )
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

//i.content.filter(str => str.indexOf(filter) === -1)
