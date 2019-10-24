import React, {useContext, useReducer} from 'react';
import FilterButton from "./FilterButton";
import style from '../stylesheet/FilterBar.module.css';
import {FilterContext} from "./FilterContext";
import {QueryContext} from "./QueryContext";
import {dateFilterReducer, initialDate} from '../utils/dateFilterReducer';
import capacityFilterReducerWraper from "../utils/capacityFilterReducer";
import {initialPrice, priceFilterReducer} from "../utils/priceFilterReducer";
import Calendar from "./Calender";
import CapacityFilter from "./CapacityFilter";


function FilterBar() {
    // 쿼리 결과를 공유하기 위해 QueryContext를 사용한다
    const {state, dispatch} = useContext(QueryContext);
    // 필터 별 리듀서를 사용한다
    const [dateFilterState, dateFilterDispatch] = useReducer(dateFilterReducer, initialDate);
    const {initialCapacity, capacityFilterReducer} = capacityFilterReducerWraper(dispatch);
    const [capacityFilterState, capacityFilterDispatch] = useReducer(capacityFilterReducer, initialCapacity);
    const [priceFilterState, priceFilterDispatch] = useReducer(priceFilterReducer, initialPrice);

    return (
        <nav style={style} className={style.FilterBar}>
            <FilterContext.Provider value={{state: dateFilterState, dispatch: dateFilterDispatch}}>
                <FilterButton filtertype={"date"}><Calendar/></FilterButton>
            </FilterContext.Provider>
            <FilterContext.Provider value={{state: capacityFilterState, dispatch: capacityFilterDispatch}}>
                <FilterButton filtertype={"capacity"}><CapacityFilter/></FilterButton>
            </FilterContext.Provider>
            <FilterContext.Provider value={{state: priceFilterState, dispatch: priceFilterDispatch}}>
                <FilterButton filtertype={"price"}/>
            </FilterContext.Provider>
        </nav>
    );
}

export default FilterBar;