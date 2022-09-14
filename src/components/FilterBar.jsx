import React from "react";

import FilterButton from "./FilterButton";


const FilterBar = ({ handleFilter, filterButtons, classes, filter }) => {
  return (
    <div className={classes}>
      {filterButtons.map((button) => {
        return (
          <FilterButton
            key={button.value}
            isActive={filter === button.value}
            {...button}
            handleClick={handleFilter}
          />
        );
      })}
    </div>
  );
};

export default FilterBar;
