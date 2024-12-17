import React, { useState } from "react";
import { TActivity } from "../types/TActivity";
import { createContext } from "react";
export type TNotification={
      acivityname:string,
      setActivityName:React.Dispatch<React.SetStateAction<string>>;
      timePeriod:string,
      setTimePeriod:React.Dispatch<React.SetStateAction<string>>;
      triggered:boolean,
      setTriggered:React.Dispatch<React.SetStateAction<boolean>>;
}
export const NotificationContext=createContext<TNotification>({} as TNotification)
export const NotificationContextProvider=({children}:any)=>{
     
     const [acivityname,setActivityName]=useState('');
     const [timePeriod,setTimePeriod]=useState('');
     const [triggered,setTriggered]=useState(false);
     return(
        <NotificationContext.Provider value={{acivityname,setActivityName,timePeriod,setTimePeriod,setTriggered,triggered}}>
            {children}
        </NotificationContext.Provider>
     )
}