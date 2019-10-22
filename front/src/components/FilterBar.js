import React from 'react';
import FilterButton from "./FilterButton";

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