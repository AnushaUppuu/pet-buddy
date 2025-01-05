import notifee, {
  EventType,
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import { TRemainder } from '../types/TRemainder';
import { EndDailyNotification, EndMonthlyNotification, EndWeeklyNotification } from './Notification';

export async function FromDailyNotification(
  remainder:TRemainder,remainderdate:Date,petname:string,username:string
) {
  console.log("From notifications")
  await notifee.requestPermission();
  console.log("From request permission");
  const channelId = await notifee.createChannel({
    id: 'display',
    name: 'DisplayChannel',
  });
  const date = new Date(remainderdate);
  console.log(date, 'Date');
  date.setHours(remainder.fromHour);
  date.setMinutes(remainder.fromMinute);
  date.setSeconds(0);

  const Dailytrigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency:RepeatFrequency.DAILY,
  };

  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      android: {channelId},
    },

    Dailytrigger,
  );
  console.log("Trigering starts now",remainder);
EndDailyNotification(date, remainder,petname,username);
  console.log("Done");
}
export async function FromWeeklyNotification(
  remainder:TRemainder,remainderdate:Date,petname:string,username:string
) {
  console.log("From notifications")
  await notifee.requestPermission();
  console.log("From request permission");
  const channelId = await notifee.createChannel({
    id: 'display',
    name: 'DisplayChannel',
  });
  const date = new Date(remainderdate);
  console.log(date, 'Date');
  date.setHours(remainder.fromHour);
  date.setMinutes(remainder.fromMinute);
  date.setSeconds(0);

  const weeklyTrigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency:RepeatFrequency.WEEKLY,
  };

  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      android: {channelId},
    },

  weeklyTrigger,
  );
  console.log("Trigering starts now",remainder);
  EndWeeklyNotification(date, remainder,petname,username);
  console.log("Done");
}
export async function FromMonthlyNotification(
  remainder:TRemainder,remainderdate:Date,petname:string,username:string
) {
  console.log("From notifications")
  await notifee.requestPermission();
  console.log("From request permission");
  const channelId = await notifee.createChannel({
    id: 'display',
    name: 'DisplayChannel',
  });
  const date = new Date(remainderdate);
  console.log(date, 'Date');
  date.setHours(remainder.fromHour);
  date.setMinutes(remainder.fromMinute);
  date.setSeconds(0);

  const Dailytrigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency:RepeatFrequency.NONE,
  };

  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${remainder.name} time`,
      android: {channelId},
    },
    Dailytrigger,
  );
  console.log("Trigering starts now",remainder);
  EndMonthlyNotification(date, remainder,petname,username);
  console.log("Done");
}