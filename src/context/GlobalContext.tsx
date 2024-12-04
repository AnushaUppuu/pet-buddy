import React, {Children, createContext, useState} from 'react';
import { TPet } from '../types/TPet';
import { TActivity } from '../types/TActivity';

type TGlobal = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  petname: string;
  setPetName: React.Dispatch<React.SetStateAction<string>>;
  petdata:TPet|undefined;
  setPetData:React.Dispatch<React.SetStateAction<TPet|undefined>>;
  activity:TActivity|undefined;
  setActivity:React.Dispatch<React.SetStateAction<TActivity|undefined>>;
  acivityname:string,
  setActivityName:React.Dispatch<React.SetStateAction<string>>;
  timePeriod:string,
  setTimePeriod:React.Dispatch<React.SetStateAction<string>>;
  triggered:boolean,
  setTriggered:React.Dispatch<React.SetStateAction<boolean>>;
};
export const GlobalContext = createContext<TGlobal>({} as TGlobal);

export const GlobalContextProvider = ({children}:any) => {
  const [username, setUsername] = useState('');
  const [petname, setPetName] = useState('');
  const [petdata,setPetData]=useState<TPet|undefined>()
  const [activity,setActivity]=useState<TActivity|undefined>();
  const [acivityname,setActivityName]=useState('');
  const [timePeriod,setTimePeriod]=useState('');
  const [triggered,setTriggered]=useState(false);
 
  return (
    <GlobalContext.Provider
      value={{username, setPetName, setUsername, petname,petdata,setPetData, activity , setActivity,acivityname,setActivityName,timePeriod,
      setTimePeriod,triggered,setTriggered}}>
      {children}
    </GlobalContext.Provider>
  );
};
