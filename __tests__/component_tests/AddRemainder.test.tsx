import { render, screen } from "@testing-library/react-native"
import { GlobalContextProvider } from "../../src/context/GlobalContext"
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee, {EventType, TimestampTrigger, TriggerType}  from '@notifee/react-native';
import { NavigationContainer } from "@react-navigation/native";
import AddRemainder from "../../src/components/AddRemainder";
jest.mock('react-native-element-dropdown',()=>({
    Dropdown:jest.fn(),
}))
jest.mock('react-native-date-picker',()=>({
    DatePicker:jest.fn(),
}))
jest.mock('react-native-modal-datetime-picker',()=>({
    DateTimePickerModal:jest.fn(),
}))
jest.mock('@notifee/react-native',()=>({
    notifee:{
        onBackgroundEvent:jest.fn(),
    },
    EventType:jest.fn(),
    TimestampTrigger:jest.fn(),
    TriggerType:jest.fn(),
}))
describe("Add Remainder component",()=>{
    beforeEach(()=>{
        const mocksetModalvisibile=jest.fn();
        render(
            <GlobalContextProvider>
                 <AddRemainder modalVisible={true} setModalVisible={mocksetModalvisibile}/>
            </GlobalContextProvider>
       )
    })
    it("Renders the elements correctly",()=>{
       
        expect(screen.getByTestId('cross-button')).toBeTruthy();
        expect(screen.getByTestId('add-button')).toBeTruthy();
        expect(screen.getByTestId('to-button')).toBeTruthy();
        expect(screen.getByTestId('from-button')).toBeTruthy();
        expect(screen.getByTestId('date-selecting-button')).toBeTruthy();
        expect(screen.getByTestId('dropdown')).toBeTruthy();
    })
})