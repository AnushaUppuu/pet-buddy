import { render, screen } from "@testing-library/react-native"
import Loading from "../../src/components/Loading"
import { NavigationContainer } from "@react-navigation/native"
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
describe("Loading component",()=>{
    it("Renders the elements correctly",()=>{
        render(
            <NavigationContainer>
                  <Loading/>
            </NavigationContainer>
          
        )
        expect(screen.getByTestId('loading-image')).toBeTruthy();
        expect(screen.getByTestId('loading-text')).toBeTruthy();
    })
})