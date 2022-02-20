import React from "react";

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
    <div>
        <label>Min price</label>
        <input
            type="number"
            value={minPrice}
            onChange={handleChange('minPrice', updateFilter)}
        />

        <label>Max price</label>
        <input
            type="number"
            value={maxPrice}
            onChange={handleChange('maxPrice', updateFilter)}
        />

    </div>
);

export default FilterForm;