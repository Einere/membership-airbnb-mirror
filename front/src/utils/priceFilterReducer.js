const initialPrice = {minPrice: 0, maxPrice: 1000000};

function priceFilterReducer(state, {type, payload}) {
    console.log('priceFilterReducer', type, payload);
    switch (type) {
        case 'init': {
            return initialPrice;
        }
        case 'query': {
            return initialPrice;
        }
        case 'minPrice': {
            return {minPrice: payload, maxPrice: state.maxPrice};
        }
        case 'maxPrice' : {
            return {checkIn: state.minPrice, checkOut: payload};
        }
        default:
            break;
    }
}

export {priceFilterReducer, initialPrice};