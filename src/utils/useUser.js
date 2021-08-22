import { useEffect, useState, createContext, useContext } from 'react';
import { AuthClient } from './auth';

export const UserContext = createContext();

const auth = new AuthClient();

export const UserContextProvider = props => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const session = await auth.session();
      setAuthToken(session);
      const user = await auth.getUser();
      setUser(user);
    }
    fetchData();
  }, []);

  // const getUserDetails = () => supabase.from('users').select('*').single();

  // useEffect(() => {
  // if (user) {
  //   Promise.allSettled([getUserDetails()]).then(
  //     (results) => {
  //       setUserDetails(results[0].value.data);
  //     }
  //   );
  // }
  // }, [user]);

  const value = {
    user,
    userDetails,
    authToken,
    setUser,
    signIn: options => auth.signIn(options),
    signUp: options => auth.signUp(options),
    signOut: refreshToken => {
      setUser(null);
      return auth.signOut(refreshToken);
    },
  };
  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
