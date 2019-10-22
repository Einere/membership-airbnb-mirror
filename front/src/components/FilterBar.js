import React from 'react';
import FilterButton from "./FilterButton";
import FilterBarStyle from '../stylesheet/FilterBar.css';

function FilterBar() {
    return (
        <nav className={"filter-bar"}>
            <FilterButton filterType={"date"}/>
            <FilterButton filterType={"capacity"}/>
            <FilterButton filterType={"price"}/>
        </nav>
    );
}

export default FilterBar;