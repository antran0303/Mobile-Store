import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import FilterByService from './FilterByService';

ProductFilter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.object.isRequired,
};

function ProductFilter({ filter, onChange }) {


    const handleChange = (values) => {

        if (onChange) {
            onChange(values)
        }
    }


    return (
        <div>
            <FilterByCategory onChange={handleChange}>

            </FilterByCategory>
            <FilterByPrice onChange={handleChange}></FilterByPrice>
            <FilterByService filter={filter} onChange={handleChange}></FilterByService>
        </div>
    );
}

export default ProductFilter;