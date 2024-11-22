import { fireEvent, render, screen } from "@testing-library/react-native"
import Register from "../../src/components/Register"
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
describe("Register component",()=>{
    beforeEach(()=>{
        render(<Register/>)
    })
    it("Renders the elements correctly",()=>{
        expect(screen.getByTestId('username')).toBeTruthy();
        expect(screen.getByTestId('password')).toBeTruthy();
        expect(screen.getByTestId('confirm-password')).toBeTruthy();
        expect(screen.getByTestId('email')).toBeTruthy();
        expect(screen.getByTestId('phone-number')).toBeTruthy();
        expect(screen.getByTestId('address')).toBeTruthy();
        expect(screen.getByTestId('login-text')).toBeTruthy();
    })
    it("Navigate to the login upon clicking on the login text",()=>{
       fireEvent.press(screen.getByTestId('login-text'))
       expect(mockedNavigate).toHaveBeenCalledWith('Login')
    })
})