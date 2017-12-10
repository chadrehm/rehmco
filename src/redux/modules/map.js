const types = {
  SET_MAP: '@rehmco/SET_MAP',
}

export const actions = {
  setMap: map => ({ type: types.SET_MAP, payload: map }),
};

export const defaultState = {
  data: {}
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_MAP:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
