import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
export async function onDisplayNotification(
  remainderdate: Date,
  hours: number,
  minutes: number,
  activityname:string,
  petname:string,
) {
  await notifee.requestPermission();

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
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };
  await notifee.createTriggerNotification(
    {
      title: 'PetBuddy',
      body: `${petname}'s ${activityname} time`,
      android: {channelId, actions},
      ios: {
        categoryId: 'interactive',
      },
    },
    trigger,
  );
}
