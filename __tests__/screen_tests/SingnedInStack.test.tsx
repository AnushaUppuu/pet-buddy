import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import SingInStack from "../../src/screens/SingInStack"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
jest.mock('@react-navigation/native-stack',()=>({
    createNativeStackNavigator:jest.fn().mockImplementation(()=>({
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