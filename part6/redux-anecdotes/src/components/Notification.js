import React from 'react';
import { connect } from 'react-redux';

const Notification = props => {
  const style = {
    border: 'solid',
    padding: 10,
    margin: 20,
    borderWidth: 1
  };

  const notifications = props.notifications;
  return notifications.text && <div style={style}>{notifications.text}</div>;
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications
  };
};

export default connect(mapStateToProps)(Notification);
