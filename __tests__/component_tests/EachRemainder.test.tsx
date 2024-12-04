import { render, screen } from "@testing-library/react-native"
import EachRemainder from "../../src/components/EachRemainder"
import ATIcon from 'react-native-vector-icons/AntDesign';
jest.mock('react-native-vector-icons/AntDesign',()=>'ATIcon');
describe("Each remainder component",()=>{
    beforeEach(()=>{
        const value={
            item:{
                name:"Walking",
                date:"2024-11-19T02:54:25.176Z",
                fromHour:11,
                fromMinute:10,
                toHour:12,
                toMinute:10,
            },
           
        }
        render(
            <EachRemainder remainder={value}/>
        )
    })
    it("Renders the elements correctly",()=>{
        expect(screen.getByTestId('name')).toBeTruthy();
        expect(screen.getByTestId('date')).toBeTruthy();
        expect(screen.getByTestId('from')).toBeTruthy();
        expect(screen.getByTestId('to')).toBeTruthy();
    })
   
})