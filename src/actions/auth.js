import { firebase, googleAuthProvider } from '../firebase/firebase';
import * as co from '../constants/auth.js';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
