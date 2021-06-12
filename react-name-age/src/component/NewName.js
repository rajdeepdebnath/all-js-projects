import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import { ADD_NAME_AGE } from '../action/nameAgeAction'

const renderInput = ({input}) => {
    return (
        <div>
            <input {...input} autoComplete="off"/>
        </div>
    );
}

const NewName = (props) => {
    const dispatch = useDispatch();

    const onFormSubmit = (formValues) => {
        dispatch(ADD_NAME_AGE(formValues));
    }

    return (
        <form onSubmit={props.handleSubmit(onFormSubmit)}>
            <Field name="name" component={renderInput} />
            <Field name="age" component={renderInput} />
            <button>Add</button>
        </form>
    );
}

export default reduxForm({ form: 'NewName' })(NewName);