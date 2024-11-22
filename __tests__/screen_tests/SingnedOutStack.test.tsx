import { render } from "@testing-library/react-native"
import SingnedOutStack from "../../src/screens/SingnedOutStack"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockImplementation(() => ({
    Navigator: jest.fn(),
  })),
}));
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
describe("SingedOutStack component",()=>{
    it("Renders the component correctly",()=>{
        render(
            <NavigationContainer>
                <SingnedOutStack/>
            </NavigationContainer>
        )

    })
})