import React from "react";
import moment from 'moment'
import {DayPickerRangeController, isInclusivelyBeforeDay} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


export default class Calendar extends React.Component {
    state = {
        startDate: null,
        endDate: null,

        // 포커싱 될 기준을 start로 할지 end 로 할지 설정. 직접 바꿔보면 앎
        // null 로 바꾸면 망함
        focusedInput: "startDate",
    };

    render() {
        return (
            <DayPickerRangeController
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                // 모름
                onDatesChange={({startDate, endDate}) =>
                    this.setState({startDate, endDate})
                }
                // 모름
                focusedInput={this.state.focusedInput}
                // 모름
                onFocusChange={focusedInput => {
                    this.setState({focusedInput: focusedInput || "startDate"});
                }}
                // 지난 날짜 disable
                isOutsideRange={day => isInclusivelyBeforeDay(day, moment().add(-1, 'days'))}
                // 2달 씩 표시
                numberOfMonths={2}
            />
        );
    }
}
