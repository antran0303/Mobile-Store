import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab'

const useStyle = makeStyles(theme => ({
    item: {
        paddingRight: theme.spacing(1),
    }
}))

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
    length: 12,
}


function ProductSkeletonList({ length }) {

    const classes = useStyle()

    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box className={classes.item}>
                            <Skeleton variant="rect" width="100%" height={118} />
                            <Skeleton /> <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;