import {render, screen, waitFor} from '@testing-library/react-native';
import {GlobalContextProvider} from '../../src/context/GlobalContext';
import Pet from '../../src/components/Pet';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import AIcons from 'react-native-vector-icons/AntDesign';
import {act} from 'react-dom/test-utils';
jest.mock('react-native-vector-icons/Ionicons', () => 'IIcon');
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
jest.mock('react-native-vector-icons/AntDesign', () => 'AIcons');
describe('Pet component', () => {
  beforeEach(async() => {
    const value = {
      name: 'Cooper',
      age: '2 yrs',
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(value),
      }),
    ) as jest.Mock;
    await act(async()=>{
      render(
        <GlobalContextProvider>
          <Pet />
        </GlobalContextProvider>,
      );
    }) 
  });
  it('Renders the elements correctly', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('pet-image'));
      expect(screen.getByTestId('back-arrow'));
      expect(screen.getByTestId('general-details'));
      expect(screen.getByTestId('about-text'));
      expect(screen.getByTestId('age-button'));
      expect(screen.getByTestId('weight-button'));
      expect(screen.getByTestId('height-button'));
      expect(screen.getByTestId('color-button'));
    });
  });
});
