import React from 'react'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {};
    if(!values.firstname.trim())
        errors.firstname = 'Required';

    return errors;
}

const SimpleForm = () => {
    const formik = useFormik({
        initialValues:{ firstname:'' },
        validate,
        onSubmit: values => console.log(values)
    });

    return (
        <div className="form">
            <header>Simple Form</header>
            <form className="form-body" onSubmit={formik.handleSubmit}>
                <div className="form-element">
                    <label>First name:</label>
                    <input name="firstname" type="text"
                    value={formik.values.firstname} onChange={formik.handleChange} />
                    {formik.errors.firstname ? <div className="error">First name is required</div> : undefined}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default SimpleForm;