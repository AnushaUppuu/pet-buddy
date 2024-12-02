import { render, screen } from "@testing-library/react-native"
import Activity from "../../src/components/Activity"
import ATIcon from 'react-native-vector-icons/AntDesign';
jest.mock('react-native-vector-icons/AntDesign',()=>'ATIcon')
describe("Activity component",()=>{
    it("Renders the elements correctly",()=>{
        render(
            <Activity/>
        )
        expect(screen.getByTestId('heading')).toBeTruthy();
        expect(screen.getByTestId('nodata')).toBeTruthy();
    })
})