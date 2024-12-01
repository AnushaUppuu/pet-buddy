import React, {Children, createContext, useState} from 'react';
import { TPet } from '../types/TPet';

type TGlobal = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  petname: string;
  setPetName: React.Dispatch<React.SetStateAction<string>>;
  petdata:TPet|undefined;
  setPetData:React.Dispatch<React.SetStateAction<TPet|undefined>>;
};
export const GlobalContext = createContext<TGlobal>({} as TGlobal);

export const GlobalContextProvider = ({children}:any) => {
  const [username, setUsername] = useState('');
  const [petname, setPetName] = useState('');
  const [petdata,setPetData]=useState<TPet|undefined>()
 
  return (
    <GlobalContext.Provider
      value={{username, setPetName, setUsername, petname,petdata,setPetData}}>
      {children}
    </GlobalContext.Provider>
  );
};
