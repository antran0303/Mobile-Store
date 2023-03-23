import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from '../../../../api/productApi';
import ProductSkeletonList from '../../../../features/Products/components/ProductSkeletonList';

ListProductPages.propTypes = {

};

const useStyle = makeStyles(theme => ({
    root: {

    },

    left: {
        width: '250px'

    },

    right: {
        flex: '1 1 auto'
    }
}))

function ListProductPages(props) {

    const classes = useStyle()
    const [productList, setProductList] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll({ _page: 1, _limit: 10 })
                setProductList(data)
            } catch (error) {
                console.log('failed to fetch product list:', error)
            }
            setLoading(false)

        })();

    }, [])


    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper>
                            colum 1
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper>
                            {loading ? <ProductSkeletonList /> : <Typography>product list</Typography>}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListProductPages; 