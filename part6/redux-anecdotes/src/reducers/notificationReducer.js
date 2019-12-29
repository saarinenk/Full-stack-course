const initialState = 'Random notification here';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return state;
    default:
      return state;
  }
};

export const setNotification = content => {
  return {
    type: 'SET_NOTIFICATIONs',
    data: {
      content
    }
  };
};

export default reducer;
