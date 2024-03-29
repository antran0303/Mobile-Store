import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,

};



function InputField(props) {


    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasErrors = formState.touched[name] && errors[name]

    console.log(formState.touched[name], errors[name],)

    return (

        <Controller
            name={name}
            control={form.control}
            as={TextField}

            variant='outlined'
            margin='normal'
            fullWidth
            label={label}
            disabled={disabled}

            error={!!hasErrors}
            helperText
        >
        </Controller>
    );
}


export default InputField;