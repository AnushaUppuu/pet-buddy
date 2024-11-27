import { render, screen, waitFor } from "@testing-library/react-native"
import Remainder from "../../src/components/Remainder"
import { GlobalContextProvider } from "../../src/context/GlobalContext"
import AIcon from 'react-native-vector-icons/AntDesign';
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker'
jest.mock('react-native-vector-icons/AntDesign',()=>'AIcon');
jest.mock('react-native-element-dropdown',()=>({
    Dropdown:jest.fn(),
}))
jest.mock('react-native-date-picker',()=>({
    DatePicker:jest.fn(),
}))
jest.mock('@react-native-community/datetimepicker',()=>({
    DateTimePicker:jest.fn(),
}))
jest.mock('react-native-modal-datetime-picker',()=>({
    DateTimePickerModal:jest.fn(),
}))
describe("Remainder component",()=>{
    beforeEach(()=>{
        render(
            <GlobalContextProvider>
                 <Remainder/>
            </GlobalContextProvider>
       )
    })
    it("Renders all the elements correctly",()=>{
        expect(screen.getByTestId('remainder-icon')).toBeTruthy();
        expect(screen.getByTestId('remainder-text')).toBeTruthy();
        expect(screen.getByTestId('Daily-button')).toBeTruthy();
        expect(screen.getByTestId('Weekly-button')).toBeTruthy();
        expect(screen.getByTestId('Monthly-button')).toBeTruthy();
        expect(screen.getByTestId('add-button')).toBeTruthy();
        expect(screen.getByTestId('flat-list-container')).toBeTruthy()
      
    })
})