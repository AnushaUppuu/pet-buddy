import { cleanup, fireEvent, render, screen } from "@testing-library/react-native"
import { GlobalContextProvider } from "../../src/context/GlobalContext"
import Profile from "../../src/components/Profile"
import IIcon from 'react-native-vector-icons/Ionicons';
import FTIcon from 'react-native-vector-icons/Fontisto';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
jest.mock('react-native-vector-icons/Ionicons',()=>'IIcon');
jest.mock('react-native-vector-icons/Fontisto',()=>'FTIcon');
jest.mock('react-native-vector-icons/AntDesign',()=>'AIcon');
jest.mock('react-native-vector-icons/Feather',()=>'FIcon');

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

describe("Profile component",()=>{
    beforeEach(()=>{
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
        render(
            <GlobalContextProvider>
                <Profile/>
            </GlobalContextProvider>
        )
    })
    afterEach(()=>{
        // mockedNavigate.mockClear();
    })
    it("Renders the elements correctly",()=>{
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
    })
    it("Navigate to the mypets",()=>{
        fireEvent.press(screen.getByTestId('mypets'))
        expect(mockedNavigate).toHaveBeenCalledWith('MyPets')
    })
    it("Navigate to the add pet",()=>{
        fireEvent.press(screen.getByTestId('add-pet'))
        expect(mockedNavigate).toHaveBeenCalledWith('AddPet')
    })
    it("Navigate to the starting screen",()=>{
        fireEvent.press(screen.getByTestId('sign-out'))
        expect(mockedNavigate).toHaveBeenCalledWith('SingnedOut')
    })
    it("Fetch",()=>{
      
        expect(global.fetch).toHaveBeenCalledTimes(1);

    })
})