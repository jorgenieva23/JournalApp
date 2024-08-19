import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        isLoggedIn: true,
      };

    case types.logout:
      return {
        uid: null,
        displayName: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
