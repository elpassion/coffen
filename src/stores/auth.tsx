// Actions
export const SET_USER_AUTHENTICATED = "auth.SET_USER_AUTHENTICATED";

// Reducer
const initialState = {
  isAuthenticated: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    default:
      return state;
  }
}

// Action Creators
export function userLogIn() {
  return { type: SET_USER_AUTHENTICATED };
}

// Side Effects
export function setAuthenticated() {
  return dispatch => {
    dispatch(userLogIn());
  };
}
