import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from '../../../../components/Form-controll/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/Form-controll/InputField';


const useStyle = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4)
    },

    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: '0 auto',
    },

    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0),
    },

    submit: {
        margin: theme.spacing(2, 0, 0, 0)
    },

}))

LoginForm.propTypes = {

    onSubmit: PropTypes.func,

};

function LoginForm(props) {

    const classes = useStyle()

    const schema = yup.object().shape({
        identifier: yup.string().required('Please enter your email').email('please enter a valid email'),
        password: yup.string().required('Please enter your password'),
    }).required();

    // Khai bao form
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema)
    })



    const handleOnsubmit = async (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            await onSubmit(values)
        }

    }


    const { isSubmitting } = form.formState

    return (

        <div className={classes.root}>

            {isSubmitting && <LinearProgress></LinearProgress>}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography className={classes.title}>
                Sign in
            </Typography>

            <form onSubmit={form.handleSubmit(handleOnsubmit)}>

                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant='contained' color='primary'
                    fullWidth
                    size="large">
                    Sign in
                </Button>
            </form>

        </div>

    );
}

export default LoginForm;