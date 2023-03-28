import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'
import Products from './Products';


const useStyle = makeStyles(theme => ({
    item: {
        paddingRight: theme.spacing(1),
    }
}))


ProductList.propTypes = {
    data: PropTypes.array
};

ProductList.defaultProps = {
    data: [],
}


function ProductList({ data }) {

    const classes = useStyle()

    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Products product={product}></Products>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;