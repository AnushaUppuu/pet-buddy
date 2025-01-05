import notifee, {
  EventType,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { useContext } from 'react';
import FIcon from 'react-native-vector-icons/FontAwesome'
import { GlobalContext } from '../context/GlobalContext';
import { TRemainder } from '../types/TRemainder';

export async function EndDailyNotification(remainderdate:Date, remainder:TRemainder,petname: string,username:string){
  console.log("entered the to notification function");
  await notifee.requestPermission();
  console.log("Trigeered the to time notification")
   const channelId = await notifee.createChannel({
      id: 'default',
     name: 'Default Channel',
    });
    const actions = [
      {
        title: 'Accept',
        pressAction: {id: 'accept'},
     },
      {
        title: 'Reject',
        pressAction: {id: 'reject'},
      },
    ];
    const date = new Date(remainderdate);
    date.setHours(remainder.toHour);
    date.setMinutes(remainder.toMinute);
    date.setSeconds(0);
      const trigger: TimestampTrigger = {
       type: TriggerType.TIMESTAMP,
       timestamp: date.getTime(),
       repeatFrequency:RepeatFrequency.DAILY
     };
     console.log(date,"date");
  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      data: {
        activityname: remainder.name,
        toHour: remainder.toHour,
        fromHour:remainder.fromHour,
        petname: petname,
        username:username
      },
      android: {channelId, actions},
      ios: {
        categoryId: 'interactive',
      },
    },
    trigger,
  );
}
export async function EndWeeklyNotification(remainderdate:Date, remainder:TRemainder,petname: string,username:string){
  console.log("entered the to notification function");
  await notifee.requestPermission();
  console.log("Trigeered the to time notification")
   const channelId = await notifee.createChannel({
      id: 'default',
     name: 'Default Channel',
    });
    const actions = [
      {
        title: 'Accept',
        pressAction: {id: 'accept'},
     },
      {
        title: 'Reject',
        pressAction: {id: 'reject'},
      },
    ];
    const date = new Date(remainderdate);
    date.setHours(remainder.toHour);
    date.setMinutes(remainder.toMinute);
    date.setSeconds(0);
      const trigger: TimestampTrigger = {
       type: TriggerType.TIMESTAMP,
       timestamp: date.getTime(),
       repeatFrequency:RepeatFrequency.WEEKLY
     };
     console.log(date,"date");
  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      data: {
        activityname: remainder.name,
        toHour: remainder.toHour,
        fromHour:remainder.fromHour,
        petname: petname,
        username:username
      },
      android: {channelId, actions},
      ios: {
        categoryId: 'interactive',
      },
    },
    trigger,
  );
}
export async function EndMonthlyNotification(remainderdate:Date, remainder:TRemainder,petname: string,username:string){
  console.log("entered the to notification function");
  await notifee.requestPermission();
  console.log("Trigeered the to time notification")
   const channelId = await notifee.createChannel({
      id: 'default',
     name: 'Default Channel',
    });
    const actions = [
      {
        title: 'Accept',
        pressAction: {id: 'accept'},
     },
      {
        title: 'Reject',
        pressAction: {id: 'reject'},
      },
    ];
    const date = new Date(remainderdate);
    date.setHours(remainder.toHour);
    date.setMinutes(remainder.toMinute);
    date.setSeconds(0);
      const trigger: TimestampTrigger = {
       type: TriggerType.TIMESTAMP,
       timestamp: date.getTime(),
       repeatFrequency:RepeatFrequency.NONE
     };
     console.log(date,"date");
  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      data: {
        activityname: remainder.name,
        toHour: remainder.toHour,
        fromHour:remainder.fromHour,
        petname: petname,
        username:username
      },
      android: {channelId, actions},
      ios: {
        categoryId: 'interactive',
      },
    },
    trigger,
  );
}