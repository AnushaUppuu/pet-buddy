import { fireEvent, render, screen } from "@testing-library/react-native";
import EachPet from "../../src/components/EachPet";
import { GlobalContextProvider } from "../../src/context/GlobalContext";

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
describe("Each pet component",()=>{
    beforeEach(()=>{
        const value={
           item:{ name:"Cooper",
            breed:"German rex"}
        };
        render(
         <GlobalContextProvider>
            <EachPet pet={value}/>
         </GlobalContextProvider>   
        )
    })
    it("Renders elements correctly",()=>{
        expect(screen.getByTestId('pet-image'));
        expect(screen.getByTestId('name'));
        expect(screen.getByTestId('breed'));
    })
    it("navigate to the individual pet component upon the clicking on the pet image",()=>{
        fireEvent.press(screen.getByTestId('pet-image'))
        expect(mockedNavigate).toHaveBeenCalledWith('Pet')
    })
})