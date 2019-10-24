const initialDate = {checkIn: undefined, checkOut: undefined};

function dateFilterReducer(state, {type, payload}) {
    console.log('dateFilterReducer', type, payload);
    switch (type) {
        case 'init': {
            return initialDate;
        }
        case 'query': {
            return initialDate;
        }
        case 'checkIn': {
            return {checkIn: payload, checkOut: state.checkOut};
        }
        case 'checkOut' : {
            return {checkIn: payload, checkOut: state.checkOut};
        }
        default:
            break;
    }
}

export {dateFilterReducer, initialDate};