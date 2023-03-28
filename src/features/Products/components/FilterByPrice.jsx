import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({

    root: {
        paddingTop: theme.spacing(2),
        borderTop: '1px solid',
        borderColor: 'grey',
        marginBottom: theme.spacing(2)
    },

    textField: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'centre',

        margin: theme.spacing(2),

        '& > span': {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    },

    title: {
        marginLeft: theme.spacing(2),
    }
}))


FilterByPrice.propTypes = {
    onChange: PropTypes.func
};



function FilterByPrice({ onChange }) {

    const classes = useStyle()
    const [values, setValue] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleClick = () => {
        if (onChange) {
            onChange(values)
        }
    }

    return (
        <Box className={classes.root}>

            <Typography variant='subtitle2' className={classes.title}>Chọn khoảng giá</Typography>
            <Box className={classes.textField}>
                <TextField
                    label="Min"
                    name='salePrice_gte'
                    value={values.salePrice_gte}
                    onChange={handleChange}
                >
                </TextField>
                <span></span>
                <TextField
                    label='max'
                    name='salePrice_lte'
                    value={values.salePrice_lte}
                    onChange={handleChange}
                >
                </TextField>
            </Box>
            <Button color='primary' variant='outlined' className={classes.title} onClick={handleClick}>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;