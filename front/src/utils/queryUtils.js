import queries from "../graphql/queries";

function getProperQuery(filterType) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return queries.getAvailableRoomsByCapacity;
        case 'price':
            return queries.getAvailableRoomsByPrice;
    }
}

function getProperQueryParameter(filterType, filterState) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return {capacity: filterState.adult + filterState.teenager};
        case 'price':
            return {minPrice: filterState.minPrice, maxPrice: filterState.maxPrice};
    }
}

function getProperQueryResult(filterType, result) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return result.data.getAvailableRoomsByCapacity;
        case 'price':
            return result.data.getAvailableRoomsByPrice;
    }
}

export {getProperQuery, getProperQueryParameter, getProperQueryResult};