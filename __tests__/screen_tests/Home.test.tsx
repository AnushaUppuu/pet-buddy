import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import Home from "../../src/screens/Home"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FTIcon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
jest.mock('react-native-vector-icons/Fontisto',()=>'FTIcon');
jest.mock('react-native-vector-icons/Ionicons',()=>'IIcon');
jest.mock('react-native-vector-icons/AntDesign',()=>'AIcon');
jest.mock('react-native-vector-icons/Feather',()=>'FIcon');
import ImageCropPicker, { openPicker } from 'react-native-image-crop-picker';
jest.mock('react-native-image-crop-picker',()=>({
    ImageCropPicker:jest.fn(),
    openPicker:jest.fn(),
}))
jest.mock('react-native-element-dropdown',()=>({
    Dropdown:jest.fn(),
}))
jest.mock('react-native-date-picker',()=>({
    DatePicker:jest.fn(),
}))
jest.mock('react-native-modal-datetime-picker',()=>({
    DateTimePickerModal:jest.fn(),
}))
jest.mock('@react-navigation/native-stack',()=>({
    createNativeStackNavigator:jest.fn().mockImplementation(()=>({
        Navigator:jest.fn(),
        Screen:jest.fn(),
    }))
}))
describe("Home component",()=>{
    it("render the elements correctly",()=>{
        render(
            <NavigationContainer>
                <Home/>
            </NavigationContainer>
        )
    })
})