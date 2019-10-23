import React from 'react';
import FilterButton from "./FilterButton";
import style from '../stylesheet/FilterBar.module.css';

function FilterBar() {
    return (
        <nav style={style} className={style.FilterBar}>
            <FilterButton filterType={"date"}/>
            <FilterButton filterType={"capacity"}/>
            <FilterButton filterType={"price"}/>
        </nav>
    );
}

export default FilterBar;