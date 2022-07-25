import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type UserContent = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
  firstname: string;
  setFirstname: React.Dispatch<React.SetStateAction<string>>;
  lastname: string;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

type Props = { children: React.ReactNode };

const CurrentUserContext = createContext<UserContent>({
  id: 0,
  setId: () => {},
  firstname: '',
  setFirstname: () => {},
  lastname: '',
  setLastname: () => {},
  email: '',
  setEmail: () => {},
  logout: () => {},
  admin: false,
  setAdmin: () => {},
});

export const CurrentUserContextProvider: React.FC<Props> = ({ children }) => {
  const [id, setId] = useState<number>(0);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [admin, setAdmin] = useState<boolean>(false);
  const removeCookie = useCookies(['user_token'])[2];
  console.log(id);
  const logout = (): void => {
    setId(0);
    setFirstname('');
    setAdmin(false);
    removeCookie('user_token');
  };

  return (
    <CurrentUserContext.Provider
      value={{
        id,
        setId,
        firstname,
        lastname,
        setLastname,
        setFirstname,
        email,
        setEmail,
        logout,
        admin,
        setAdmin,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
