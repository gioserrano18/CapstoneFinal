import React from 'react';

const FilterOptions = ({ sortProducts }) => {
  const handleSortChange = (e) => {
    sortProducts(e.target.value);
  };

  return (
    <div>
      <h2>Filter Options</h2>
      <label>
        Sort by:
        <select onChange={handleSortChange}>
          <option value="asc">Price - Low to High</option>
          <option value="desc">Price - High to Low</option>
        </select>
      </label>
    </div>
  );
}

export default FilterOptions;