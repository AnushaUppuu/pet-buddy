import {fireEvent, render, screen} from '@testing-library/react-native';
import Login from '../../src/components/Login';

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
    render(<Login />);
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
});
