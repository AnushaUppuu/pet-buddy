import {render, screen} from '@testing-library/react-native';
import AddImage from '../../src/components/AddImage';
import ImageCropPicker, { openPicker } from 'react-native-image-crop-picker';
jest.mock('react-native-image-crop-picker',()=>({
    ImageCropPicker:jest.fn(),
    openPicker:jest.fn(),
}))
describe('Add Image component', () => {
  beforeEach(() => {
    const mocksetModalVisible = jest.fn();
    render(
      <AddImage modalVisible={true} setModalVisible={mocksetModalVisible} />,
    );
  });
   it("Renders the elements correctly",()=>{
    expect(screen.getByTestId('image-button')).toBeTruthy();
    expect(screen.getByTestId('add-button')).toBeTruthy();
    expect(screen.getByTestId('cross-button')).toBeTruthy();
   })
});
