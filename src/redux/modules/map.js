const types = {
  SET_MAP: '@rehmco/SET_MAP',
  SET_ORIGIN: '@rehmco/SET_ORIGIN',
  SET_DESTINATION: '@rehmco/SET_DESTINATION',
}

export const actions = {
  setMap: map => ({ type: types.SET_MAP, payload: map }),
  setOrigin: place => ({ type: types.SET_ORIGIN, payload: place }),
  setDestination: place => ({ type: types.SET_DESTINATION, payload: place }),
};

export const defaultState = {
  data: {},
  origin: {},
  destination: {},
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_MAP:
      return { ...state, data: action.payload };
    case types.SET_ORIGIN:
      return { ...state, origin: action.payload };
    case types.SET_DESTINATION:
      return { ...state, destination: action.payload };
    default:
      return state;
  }
};

export default reducer;
