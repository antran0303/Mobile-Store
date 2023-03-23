import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/Form-controll/InputField';




TodoForm.propTypes = {

    onSubmit: PropTypes.func,

};

function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string()
            .required('please enter title')
            .min(5, 'too short')
            .max(10, 'too long')
    });

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })


    const handleSubmit = (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }

        form.reset()
    }


    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            Todo Form

            <InputField name="title" label="todo" form={form} />

        </form>
    );
}

export default TodoForm;