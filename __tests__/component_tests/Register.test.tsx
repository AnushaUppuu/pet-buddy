import { act, fireEvent, render, screen } from "@testing-library/react-native"
import Register from "../../src/components/Register"
import ImageCropPicker from 'react-native-image-crop-picker';
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
jest.mock('react-native-image-crop-picker',()=>({
  ImageCropPicker:jest.fn(),
  openPicker:jest.fn(),
}))
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
    // it("Fetch call",async()=>{
    //   global.fetch = jest.fn(() =>
    //     Promise.resolve({
    //       ok: true,
    //       json: () => Promise.resolve({success: true}),
    //     }),
    //   ) as jest.Mock;
    // await act(async()=>{
    //   fireEvent.changeText(screen.getByTestId('username'),"Anusha_uppu")
    //   fireEvent.changeText(screen.getByTestId('password'),'anu@123')
    //   fireEvent.changeText(screen.getByTestId('confirm-password'),'anu@123')
    //   fireEvent.changeText(screen.getByTestId('email'),'anu@gmail.com');
    //   fireEvent.changeText(screen.getByTestId('phone-number'),'8522041688')
    //   fireEvent.changeText(screen.getByTestId('address'),'Bhadrachalam')
    //   fireEvent.press(screen.getByTestId('register-button'))
    // })
    //   expect(global.fetch).toHaveBeenCalledTimes(1);
    // })
})