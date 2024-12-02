/**
 * @format
 */

import 'react-native';
import React from 'react';


// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';
import FTIcon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import Icon2 from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockImplementation(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../../src/screens/Main';
jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn().mockImplementation(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));
jest.mock('react-native-image-crop-picker', () => ({
  ImageCropPicker: jest.fn(),
}));
jest.mock('@notifee/react-native', () => ({
  // onBackgroundEvent: jest.fn(),
  // EventType: {
  //   ACTION_PRESS: 'action_press',
  // },
  onForegroundEvent: jest.fn(),
  EventType: {
    ACTION_PRESS: 'action_press',
  },
  TimestampTrigger: jest.fn(),
  TriggerType: jest.fn(),
}));

jest.mock('react-native-vector-icons/Fontisto', () => 'FTIcon');
jest.mock('react-native-vector-icons/Ionicons', () => 'IIcon');
jest.mock('react-native-vector-icons/AntDesign', () => 'AIcon');
jest.mock('react-native-vector-icons/Feather', () => 'FIcon');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon2');
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons',()=>'MIcon')
jest.mock('react-native-element-dropdown', () => ({
  Dropdown: jest.fn(),
}));
jest.mock('react-native-date-picker', () => ({
  DatePicker: jest.fn(),
}));
jest.mock('react-native-modal-datetime-picker', () => ({
  DateTimePickerModal: jest.fn(),
}));
const mockedNavigate = jest.fn();
const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: jest.fn(),
      goBack: mockedGoBack,
    }),
    useRoute: jest.fn(),
  };
});
it('renders correctly', () => {
  render(
    <Main/>
  );
});
