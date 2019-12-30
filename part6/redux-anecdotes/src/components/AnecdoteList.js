import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = props => {
  const anecdotes = props.anecdotes;
  const filter = props.filter.text;

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
                  props.voteAnecdote(anecdote.id);
                  props.setNotification('You voted for: ' + anecdote.content);
                  setTimeout(() => {
                    props.setNotification(null);
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

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

export default connect(mapStateToProps, { voteAnecdote, setNotification })(
  AnecdoteList
);

//i.content.filter(str => str.indexOf(filter) === -1)
