import * as co from '../constants/auth';

export default (state = {}, action) => {
  switch (action.type) {
    case co.LOGIN:
      return {
        uid: action.uid
      };
    case co.LOGOUT:
      return {};
    default:
      return state;
  }
};
