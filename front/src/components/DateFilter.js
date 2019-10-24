import React from 'react';
import moment from 'moment';
import {DayPickerRangeController, isInclusivelyBeforeDay} from "react-dates";


function DateFilter() {
    let startDate = null;
    let endDate = null;
    let focusedInput = "startDate";

    return (
        <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            // 모름
            onDatesChange={({startDate, endDate}) =>
                this.setState({startDate, endDate})
            }
            // 모름
            focusedInput={focusedInput}
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

export default DateFilter;