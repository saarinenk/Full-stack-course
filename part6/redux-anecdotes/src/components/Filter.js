import React from 'react';
import { setFilter } from '../reducers/filterReducer';

const Filter = props => {
  const handleChange = event => {
    const filter = props.store.getState().filter;
    props.store.dispatch(setFilter(event.target.value));
    console.log(filter);
    console.log('bedroom'.indexOf('jk') === -1);
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
