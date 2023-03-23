import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { login, register } from '../../../../features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';

Login.propTypes = {

    closeDialog: PropTypes.func

};

function Login(props) {

    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar()


    const handleSubmit = async (values) => {

        try {
            const action = login(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)

            //close dialog
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }

        } catch (error) {
            console.log("failed to login:", error)
            enqueueSnackbar(error.message, { variant: 'error' })

        }
    }


    return (
        <div>
            <LoginForm onSubmit={handleSubmit}></LoginForm>
        </div>
    );
}

export default Login;