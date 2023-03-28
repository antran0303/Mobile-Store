import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';
import { current } from '@reduxjs/toolkit';

ProductSort.propTypes = {
    currentValue: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};


function ProductSort({ currentValue, onChange }) {


    const handleSortChange = (event, newValue) => {

        if (onChange) {
            onChange(newValue)
        }

    }

    return (

        <Tabs
            value={currentValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
            <Tab label="Giá cao tới thấp" value="salePrice:DESC" />
        </Tabs>

    );
}

export default ProductSort;