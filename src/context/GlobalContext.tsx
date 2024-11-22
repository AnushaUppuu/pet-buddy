import React, {Children, createContext, useState} from 'react';

type TGlobal = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  petname: string;
  setPetName: React.Dispatch<React.SetStateAction<string>>;
};
export const GlobalContext = createContext<TGlobal>({} as TGlobal);

export const GlobalContextProvider = ({children}:any) => {
  const [username, setUsername] = useState('');
  const [petname, setPetName] = useState('');
  return (
    <GlobalContext.Provider
      value={{username, setPetName, setUsername, petname}}>
      {children}
    </GlobalContext.Provider>
  );
};
