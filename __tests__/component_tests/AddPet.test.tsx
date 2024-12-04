import { fireEvent, render, screen } from "@testing-library/react-native"
import AddPet from "../../src/components/AddPet"
import ImageCropPicker from 'react-native-image-crop-picker';
jest.mock('react-native-image-crop-picker',()=>({
    ImageCropPicker:jest.fn(),
    openPicker:jest.fn(),
}))
describe("Add Pet component",()=>{
    beforeEach(()=>{
        render(
            <AddPet/>
        )
    })
    it("Render the elements correctly",()=>{
        expect(screen.getByTestId('petname')).toBeTruthy()
        expect(screen.getByTestId('petage')).toBeTruthy()
        expect(screen.getByTestId('petweight')).toBeTruthy()
        expect(screen.getByTestId('petheight')).toBeTruthy()
        expect(screen.getByTestId('petcolor')).toBeTruthy()
        expect(screen.getByTestId('petremarks')).toBeTruthy()
        expect(screen.getByTestId('petgender')).toBeTruthy()
        expect(screen.getByTestId('petcategory')).toBeTruthy()
        expect(screen.getByTestId('petbreed')).toBeTruthy()
        expect(screen.getByTestId('emergencyContact')).toBeTruthy()
        expect(screen.getByTestId('profilepicture')).toBeTruthy()
        expect(screen.getByTestId('add-button')).toBeTruthy()
    })
    it("Fetch call",()=>{
        global.fetch = jest.fn(() =>
            Promise.resolve({
              ok: true,
              json: () => Promise.resolve({success: true}),
            }),
          ) as jest.Mock;
        fireEvent.press(screen.getByTestId('add-button'))
        expect(global.fetch).toHaveBeenCalledTimes(1);
    })
})