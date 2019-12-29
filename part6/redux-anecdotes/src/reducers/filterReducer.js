const initialState = {
  text: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, text: action.data };
    default:
      return state;
  }
};

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    data: filter
  };
};

export default reducer;
