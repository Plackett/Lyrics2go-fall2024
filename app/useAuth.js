import { useEffect, useState } from 'react';
import { firebase } from './firebase-config';

export function useAuth() {
  const [user, setUser] = useState(null);

  // firebase stuff, ignore
  useEffect(() => {
    // Set up Firebase authentication listener
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}
