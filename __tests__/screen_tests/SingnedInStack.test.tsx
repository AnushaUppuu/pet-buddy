import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import SingInStack from '../../src/screens/SingInStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FTIcon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import notifee, {EventType, TimestampTrigger, TriggerType}  from '@notifee/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import YoutubePlayer from 'react-native-youtube-iframe';
jest.mock('@react-navigation/native-stack',()=>({
    createNativeStackNavigator:jest.fn().mockImplementation(()=>({
        Navigator:jest.fn(),
        Screen:jest.fn(),
    }))
}))
jest.mock('react-native-youtube-iframe',()=>({
  YoutubePlayer:jest.fn()
}))
jest.mock('react-native-image-crop-picker',()=>({
  ImageCropPicker:jest.fn(),
  openPicker:jest.fn(),
}))
jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn().mockImplementation(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));
jest.mock('react-native-element-dropdown',()=>({
  Dropdown:jest.fn(),
}))
jest.mock('react-native-date-picker',()=>({
  DatePicker:jest.fn(),
}))
jest.mock('@react-native-community/datetimepicker',()=>({
  DateTimePicker:jest.fn(),
}))
jest.mock('react-native-modal-datetime-picker',()=>({
  DateTimePickerModal:jest.fn(),
}))
jest.mock('@notifee/react-native',()=>({
  notifee:{
      onBackgroundEvent:jest.fn(),
  },
  EventType:jest.fn(),
  TimestampTrigger:jest.fn(),
  TriggerType:jest.fn(),
}))
jest.mock('react-native-vector-icons/Fontisto',()=>'FTIcon')
jest.mock('react-native-vector-icons/Ionicons',()=>'IIcon')
jest.mock('react-native-vector-icons/AntDesign',()=>'AIcon')
jest.mock('react-native-vector-icons/Feather',()=>'FIcon')
jest.mock('react-native-vector-icons/FontAwesome',()=>'Icon')
jest.mock('react-native-vector-icons/Ionicons',()=>'Icon2')
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>'MIcon')
describe('Signed In Stack ', () => {
  it('renders the elements correctly', () => {
    render(
      <NavigationContainer>
        <SingInStack />
      </NavigationContainer>,
    );
  });
});
