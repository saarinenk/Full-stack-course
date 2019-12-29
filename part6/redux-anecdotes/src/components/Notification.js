import React, { useEffect } from 'react';
import { hideNotification } from '../reducers/notificationReducer';

const Notification = props => {
  const style = {
    border: 'solid',
    padding: 10,
    margin: 20,
    borderWidth: 1
  };

  const notifications = props.store.getState().notifications;
  return notifications.text && <div style={style}>{notifications.text}</div>;
};

export default Notification;
