import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
export async function onDisplayNotification(
  remainderdate: Date,
  hours: number,
  minutes: number,
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
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {channelId, actions},
      ios: {
        categoryId: 'interactive',
      },
    },
    trigger,
  );
}
export const notificationTriggered = notifee.onBackgroundEvent(
  async ({type, detail}) => {
    if (type == EventType.ACTION_PRESS) {
      if (detail.pressAction?.id == 'accept') {
        console.log('Pressed');
      }
    }
  },
);
