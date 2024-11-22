import { fireEvent, render, screen } from "@testing-library/react-native"
import Starting from "../../src/components/Starting"
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
describe("Starting screen",()=>{
    beforeEach(()=>{
      render(
        <Starting/>
      )
    })
    it("renders the elements correctly",()=>{
        expect(screen.getByTestId('pet-image')).toBeTruthy();
        expect(screen.getByTestId('modal')).toBeTruthy();
        expect(screen.getByTestId('start-button')).toBeTruthy();
    })
    it("Navigate to the login page upon clicking on the getting started",()=>{
      fireEvent.press(screen.getByTestId('start-button'));
      expect(mockedNavigate).toHaveBeenCalledWith('Login')
    })
})