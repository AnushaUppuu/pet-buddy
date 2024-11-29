import {fireEvent, render, screen} from '@testing-library/react-native';
import Track from '../../src/components/Track';
import FIcon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
jest.mock('react-native-vector-icons/Feather', () => 'FIcon');
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
  
describe('Track component', () => {
  beforeEach(() => {
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
    const setModalVisible=jest.fn();
    render(
     <NavigationContainer>
         <Track modalVisible={true} setModalVisible={setModalVisible} />
     </NavigationContainer>   
   );
  });
  it('Renders the elements correctly', () => {
    expect(screen.getByTestId('modal')).toBeTruthy();
    expect(screen.getByTestId('remainder-button')).toBeTruthy();
    expect(screen.getByTestId('activity-button')).toBeTruthy();
  });
  it('Navigate to the remainder screen', () => {
    fireEvent.press(screen.getByTestId('remainder-button'));
    expect(mockedNavigate).toHaveBeenCalledWith('Remainder');
  });
  it('Navigate to the activity screen', () => {
    fireEvent.press(screen.getByTestId('activity-button'));
    expect(mockedNavigate).toHaveBeenCalledWith('Activity');
  });
});
