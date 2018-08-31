import {setText, sortByDate,sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should filter set text', ()=>{
    const action = setText("test");
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:"test"
    });
});
test('should filter set default text', ()=>{
    const action = setText();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
    });
});
test('should generate action object sortbydate ', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    });
});
test('should generate action object sort by amount ', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    });
});
test("should generate set start date action object",()=>{
    const action = setStartDate(moment(0)); 
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    })
})
test("should generate set end date action object",()=>{
    const action = setEndDate(moment(0)); 
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    })
})  