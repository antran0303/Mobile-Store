import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import { BorderColor, BorderTop } from '@material-ui/icons';


const useStyle = makeStyles(theme => ({
    root: {
        borderTop: '1px solid',
        BorderColor: 'grey'

    },

    check: {
        margin: theme.spacing(2),
        marginTop: 0
    },

    title: {
        margin: theme.spacing(2),
        marginBottom: 0
    }

}))



FilterByService.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func
};

function FilterByService({ filter, onChange }) {

    const classes = useStyle()

    const handleChange = (e) => {

        if (!onChange) return

        const { name, checked } = e.target;
        onChange({ [name]: checked })

    }


    return (
        <Box className={classes.root}>
            <Typography variant='subtitle2' className={classes.title}>Dịch Vụ</Typography>
            <Box className={classes.check}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={filter.isPromotion}
                            onChange={handleChange}
                            name="isPromotion"
                            color="primary"
                        />
                    }
                    label="Promotion"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={filter.isFreeShip}
                            onChange={handleChange}
                            name="isFreeShip"
                            color="primary"
                        />
                    }
                    label="Free Ship"
                />
            </Box>
        </Box>
    );
}


export default FilterByService;