import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import Login from '../../src/components/Login';
import {act} from 'react-test-renderer';
import {
  GlobalContext,
  GlobalContextProvider,
} from '../../src/context/GlobalContext';

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
describe('Login component', () => {
  beforeEach(() => {
    const username = 'Anusha_uppu';
    const setUsername = jest.fn();
    const petname = 'Cooper';
    const setPetName = jest.fn();

    render(
      <GlobalContextProvider>
        <Login />
      </GlobalContextProvider>,
    );
  });
  it('Renders the elements correctly', () => {
    expect(screen.getByTestId('username')).toBeTruthy();
    expect(screen.getByTestId('password')).toBeTruthy();
    expect(screen.getByTestId('login-button')).toBeTruthy();
    expect(screen.getByTestId('register-text')).toBeTruthy();
  });
  it('Should navigate to the register screen upon clicking on the register', () => {
    fireEvent.press(screen.getByTestId('register-text'));
    expect(mockedNavigate).toHaveBeenCalledWith('Register');
  });
  it('Fetch is called when the login button is clicked', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({success: true}),
      }),
    ) as jest.Mock;
    await waitFor(async () => {
      fireEvent.changeText(screen.getByTestId('username'), 'Anusha_uppu');
      fireEvent.changeText(screen.getByTestId('password'), 'anu@123');
      fireEvent.press(screen.getByTestId('login-button'));
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'http://localhost:4000/users/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: 'Anusha_uppu', password: 'anu@123'}),
      },
    );
  });
});
