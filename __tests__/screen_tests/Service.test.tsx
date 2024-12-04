import { NavigationContainer } from "@react-navigation/native"
import { render, screen } from "@testing-library/react-native"
import Service from "../../src/screens/Service"
import AIcon from 'react-native-vector-icons/AntDesign'
jest.mock('react-native-vector-icons/AntDesign',()=>'AIcon')
describe("Services screen",()=>{
    beforeEach(()=>{
        render(
            <NavigationContainer>
                <Service/>
            </NavigationContainer>
        )
    })
    it("Renders the elements correctly",()=>{
        expect(screen.getByTestId('mainText')).toBeTruthy();
        expect(screen.getByTestId('veterinary-button')).toBeTruthy();
        expect(screen.getByTestId('Grooming-button')).toBeTruthy();
        expect(screen.getByTestId('line')).toBeTruthy();
    })
})