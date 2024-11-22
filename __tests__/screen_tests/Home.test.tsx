import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import Home from "../../src/screens/Home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
jest.mock('@react-navigation/native-stack',()=>({
    createNativeStackNavigator:jest.fn().mockImplementation(()=>({
        Navigator:jest.fn(),
        Screen:jest.fn(),
    }))
}))
describe("Home component",()=>{
    it("render the elements correctly",()=>{
        render(
            <NavigationContainer>
                <Home/>
            </NavigationContainer>
        )
    })
})