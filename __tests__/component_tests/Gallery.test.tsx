import { render, screen } from "@testing-library/react-native"
import { GlobalContextProvider } from "../../src/context/GlobalContext"
import Gallery from "../../src/components/Gallery"
import ImageCropPicker from 'react-native-image-crop-picker';
jest.mock('react-native-image-crop-picker', () => ({
    // openPicker: jest.fn(),
    ImageCropPicker:jest.fn(),
  }));
describe("Gallery component",()=>{
    beforeEach(()=>{
        render(
            <GlobalContextProvider>
                <Gallery/>
            </GlobalContextProvider>
        )
    })
    it("Renders the elements correctly",()=>{
        expect(screen.getByTestId('pet-name')).toBeTruthy();
        expect(screen.getByTestId('add-button')).toBeTruthy();
        // expect(screen.getByTestId('flat-list')).toBeTruthy();
    })
})