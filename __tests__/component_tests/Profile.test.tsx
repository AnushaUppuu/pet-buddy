import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {
  GlobalContext,
  GlobalContextProvider,
} from '../../src/context/GlobalContext';
import Profile from '../../src/components/Profile';
import IIcon from 'react-native-vector-icons/Ionicons';
import FTIcon from 'react-native-vector-icons/Fontisto';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {
  NotificationContext,
  NotificationContextProvider,
} from '../../src/context/NavigationContext';
import {TPet} from '../../src/types/TPet';
jest.mock('react-native-vector-icons/Ionicons', () => 'IIcon');
jest.mock('react-native-vector-icons/Fontisto', () => 'FTIcon');
jest.mock('react-native-vector-icons/AntDesign', () => 'AIcon');
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

describe('Profile component', () => {
  beforeEach(async () => {
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
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({success: true}),
      }),
    ) as jest.Mock;
    await waitFor(async () => {
      const username = 'Anusha';
      const setUsername = jest.fn();
      const petname = 'Cooper';
      const setPetName = jest.fn();
      const petdata: TPet = 
        {
          name: 'Cooper',
          age: '4',
          weight: '4',
          category: 'cat',
          color: 'green',
          height: '7',
          gender: 'M',
          profileImage: 'oeuro',
          breed: 'iuyjhguy',
          emergencyContact:"9083347896682357"
        };
      const setPetData = jest.fn();
      render(
        <GlobalContext.Provider
          value={{
            username,
            setUsername,
            petname,
            setPetName,
            petdata,
            setPetData,
          }}>
          <NotificationContextProvider>
            <Profile />
          </NotificationContextProvider>
        </GlobalContext.Provider>,
      );
    });
  });

  it('Renders the elements correctly', () => {
    expect(screen.getByTestId('profile-image')).toBeTruthy();
    expect(screen.getByTestId('profile-image')).toBeTruthy();
    expect(screen.getByTestId('Username')).toBeTruthy();
    expect(screen.getByTestId('email')).toBeTruthy();
    expect(screen.getByTestId('phone-number')).toBeTruthy();
    expect(screen.getByTestId('sign-out')).toBeTruthy();
    expect(screen.getByTestId('profile-image')).toBeTruthy();
    expect(screen.getByTestId('mypets')).toBeTruthy();
    expect(screen.getByTestId('my-address')).toBeTruthy();
    expect(screen.getByTestId('add-pet')).toBeTruthy();
  });
  it('Navigate to the mypets', () => {
    fireEvent.press(screen.getByTestId('mypets'));
    expect(mockedNavigate).toHaveBeenCalledWith('MyPets');
  });
  it('Navigate to the add pet', () => {
    fireEvent.press(screen.getByTestId('add-pet'));
    expect(mockedNavigate).toHaveBeenCalledWith('AddPet');
  });
  it('Navigate to the starting screen', () => {
    fireEvent.press(screen.getByTestId('sign-out'));
    expect(mockedNavigate).toHaveBeenCalledWith('SingnedOut');
  });
  it('Fetch', () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({success: true}),
      }),
    ) as jest.Mock;
    const username = 'Anusha';
      const setUsername = jest.fn();
      const petname = 'Cooper';
      const setPetName = jest.fn();
      const petdata: TPet = 
        {
          name: 'Cooper',
          age: '4',
          weight: '4',
          category: 'cat',
          color: 'green',
          height: '7',
          gender: 'M',
          profileImage: 'oeuro',
          breed: 'iuyjhguy',
          emergencyContact:"9083347896682357"
        };
        const setPetData = jest.fn();
    render(
      <GlobalContext.Provider
        value={{
          username,
          setUsername,
          petname,
          setPetName,
          petdata,
          setPetData,
        }}>
        <NotificationContextProvider>
          <Profile />
        </NotificationContextProvider>
      </GlobalContext.Provider>,
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
