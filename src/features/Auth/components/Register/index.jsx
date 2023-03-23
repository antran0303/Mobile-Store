import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from '../../../../features/Auth/userSlice';
import { useSnackbar } from 'notistack';

Register.propTypes = {

    closeDialog: PropTypes.func

};

function Register(props) {

    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()


    const handleSubmit = async (values) => {

        values.username = values.email;

        try {
            const action = register(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            //close dialog
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }

            //do something here on register successfully
            enqueueSnackbar('Register successfully', { variant: 'success' })

        } catch (error) {
            console.log("failed to register:", error)
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }


    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}></RegisterForm>
        </div>
    );
}


export default Register;