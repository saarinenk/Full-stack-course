import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteList = props => {
  return (
    <div>
      {props.anecdotes.map(anecdote => (
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  const f = filter.text;
  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(i => !f || i.content.toLowerCase().includes(f.toLowerCase()));
};

const mapStateToProps = state => {
  return {
    anecdotes: anecdotesToShow(state)
  };
};

export default connect(mapStateToProps, { voteAnecdote, setNotification })(
  AnecdoteList
);
