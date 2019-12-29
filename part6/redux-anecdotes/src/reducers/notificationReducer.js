const initialState = {
  text: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, text: action.data };
    default:
      return state;
  }
};

export const setNotification = content => {
  return {
    type: 'SET_NOTIFICATION',
    data: content
  };
};

export default reducer;
