import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import catagoryApi from '../../../api/categoryApi';
import { Box, makeStyles, Typography } from '@material-ui/core';

FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyle: 'none',

        '& > li': {
            marginTop: theme.spacing(1),
            transition: 'all 25s',

            '&:hover': {
                color: theme.palette.blue,
                cursor: 'pointer',
            }
        }
    },

}))


function FilterByCategory({ onChange }) {

    const [category, setCategory] = useState([])
    const classes = useStyle()


    useEffect(() => {
        (async () => {

            try {
                const respone = await catagoryApi.getAll()
                setCategory(respone.map(x => ({
                    id: x.id,
                    name: x.name
                })))

            } catch (error) {
                console.log("Failed to get categories", error)
            }

        })()
    }, [])

    const handleClick = (id) => {

        if (onChange) {
            onChange({ 'category.id': id })
        }

    }

    return (
        <Box className={classes.root}>
            <Typography variant='subtitle2'>DANH MỤC SẢN PHẨM</Typography>
            <ul className={classes.menu}>
                {category.map((category) => (
                    <li key={category.id} onClick={() => handleClick(category.id)}>{category.name}</li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;