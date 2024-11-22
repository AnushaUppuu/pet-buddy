import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import SingInStack from "../../src/screens/SingInStack"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
jest.mock('@react-navigation/bottom-tabs',()=>({
   createBottomTabNavigator:jest.fn().mockImplementation(()=>({
    Navigator:jest.fn(),
    Screen:jest.fn()
   }))
}))
describe("Signed In Stack ",()=>{
    it("renders the elements correctly",()=>{
        render(
            <NavigationContainer>
                <SingInStack/>
            </NavigationContainer>
        )
    })
})