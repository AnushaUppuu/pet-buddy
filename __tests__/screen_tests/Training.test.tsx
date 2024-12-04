import { render, screen } from "@testing-library/react-native"
import Training from "../../src/screens/Training"
import { NavigationContainer } from "@react-navigation/native"

describe("Training component",()=>{
    render(
        <NavigationContainer>
              <Training/>
        </NavigationContainer>
      
    )
    it("renders the elements correctly",()=>{
        expect(screen.getByTestId('heading')).toBeTruthy();
        
    })
})