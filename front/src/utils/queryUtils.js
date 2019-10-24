import queries from "../graphql/queries";

function getProperQuery(filterType) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return queries.getAvailableRoomsByCapacity;
        case 'price':
            return;
    }
}

function getProperQueryParameter(filterType, filterState) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return {capacity: filterState.adult + filterState.teenager};
        case 'price':
            return;
    }
}

function getProperQueryResult(filterType, result) {
    switch (filterType) {
        case 'date':
            return;
        case 'capacity':
            return result.data.getAvailableRoomsByCapacity;
        case 'price':
            return;
    }
}

export {getProperQuery, getProperQueryParameter, getProperQueryResult};