import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Togglable = props => {
  const [visible, setVisible] = useState(false);

  const hide = { display: 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={visible ? hide : {}}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={visible ? {} : hide}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
};

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};

export default Togglable;
