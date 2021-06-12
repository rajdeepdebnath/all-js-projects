import React from 'react'
import { useDispatch } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addNewPost } from '../actions/postAction'

const renderInput = ({input}) => {
    return (
        <div>
            <input type="text" {...input} autoComplete="off"/>
        </div>
    );
}


const NewPost = (props) => {
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(addNewPost(values));
    };

    return (
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="title" component={renderInput} />
            <Field name="author" component={renderInput} />
            <button>Submit</button>
        </form>
    );
}

export default reduxForm({
    form:'NewPostForm'
})(NewPost);