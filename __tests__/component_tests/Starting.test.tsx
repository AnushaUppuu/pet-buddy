import { render, screen } from "@testing-library/react-native"
import Starting from "../../src/components/Starting"

describe("Starting screen",()=>{
    beforeEach(()=>{
      render(
        <Starting/>
      )
    })
    it("renders the elements correctly",()=>{
        expect(screen.getByTestId('pet-image')).toBeTruthy();
        expect(screen.getByTestId('modal')).toBeTruthy();
        expect(screen.getByTestId('start-button')).toBeTruthy();
    })
})