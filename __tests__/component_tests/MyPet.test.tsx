import { fireEvent, render, screen } from "@testing-library/react-native"
import MyPets from "../../src/components/MyPets"
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
describe("MyPet component",()=>{
    beforeEach(()=>{
        render(<MyPets/>)
    })
    it("Renders correctly all the elements",()=>{
        expect(screen.getByTestId('profile-container'))
        expect(screen.getByTestId('username-text'))
        expect(screen.getByTestId('profile-button'))
        expect(screen.getByTestId('pets-container'))
        expect(screen.getByTestId('addPet-button'))
    })
    it("Navigate to the profile upon clicking the profile icon",()=>{
        fireEvent.press(screen.getByTestId('profile-button'));
        expect(mockedNavigate).toHaveBeenCalledWith('Profile')
    })
    it("Navigate to the add pet screen upon clicking the add pet icon",()=>{
        fireEvent.press(screen.getByTestId('addPet-button'));
        expect(mockedNavigate).toHaveBeenCalledWith('AddPet')
    })
})