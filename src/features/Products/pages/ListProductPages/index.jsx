import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productApi from '../../../../api/productApi';
import ProductSkeletonList from '../../../../features/Products/components/ProductSkeletonList';
import ProductList from '../../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../../components/ProductSort';
import ProductFilter from '../../components/ProductFilter';


ListProductPages.propTypes = {

};

const useStyle = makeStyles(theme => ({
    root: {

    },

    left: {
        width: '250px'

    },

    right: {
        flex: '1 1 0'
    },

    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: "20px",
        paddingBottom: "20px"
    }
}))

function ListProductPages(props) {

    const classes = useStyle()
    const [productList, setProductList] = useState()
    const [pagination, setPagination] = useState({
        total: 10,
        limit: 10,
        page: 1,
    })
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 12,
        _sort: 'salePrice:ASC',
    })


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const { data, pagination } = await productApi.getAll(filter)
                setProductList(data)
                setPagination(pagination)
            } catch (error) {
                console.log('failed to fetch product list:', error)
            }
            setLoading(false)

        })();

    }, [filter])

    const handleOnchange = (e, page) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            _page: page,
        }))

    }

    const handleSortonChange = (newSortValue) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            _sort: newSortValue,
        }))

    }

    const handleChange = (newFilter) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            ...newFilter
        }))
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper>

                            <ProductFilter
                                filter={filter}
                                onChange={handleChange}
                            >
                            </ProductFilter>

                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper>

                            <ProductSort onChange={handleSortonChange} currentValue={filter._sort}></ProductSort>

                            {loading ? <ProductSkeletonList /> : <ProductList data={productList}></ProductList>}
                            <Box>
                                <Pagination
                                    className={classes.pagination}
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    color="primary"
                                    onChange={handleOnchange}
                                    page={pagination.page}
                                />
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListProductPages; 