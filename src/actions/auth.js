import { firebase, googleAuthProvider } from '../firebase/firebase';

import * as co from '../constants/auth';

export const login = (uid) => ({
  type: co.LOGIN,
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: co.LOGOUT
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
