import React from 'react'
import { useFormik } from 'formik'

const validate = values => {
    const errors = {};
    if(!values.firstname.trim())
        errors.firstname = 'Required';
    
    if(!values.lastname.trim())
        errors.lastname = 'Required';

    
    if(!values.email.trim())
        errors.email = 'Required';
    else if(!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(values.email.trim()))
        errors.email = 'Incorrect Email format';

    return errors;
}

const FormWithThreeFields = () => {
    const formik = useFormik({
        initialValues:{ firstname:'', lastname:'', email:'' },
        validate,
        onSubmit: values => console.log(values)
    });

    return (
        <div className="form">
            <header>Form with 3 Fields</header>
            <form className="form-body" onSubmit={formik.handleSubmit}>
                <div className="form-element">
                    <label>First name:</label>
                    <input name="firstname" type="text" onBlur={formik.handleBlur}
                    value={formik.values.firstname} onChange={formik.handleChange} />
                    {formik.touched.firstname && formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : undefined}
                </div>
                <div className="form-element">
                    <label>Last name:</label>
                    <input name="lastname" type="text" onBlur={formik.handleBlur}
                    value={formik.values.lastname} onChange={formik.handleChange} />
                    {formik.touched.lastname && formik.errors.lastname ? <div className="error">{formik.errors.lastname}</div> : undefined}
                </div>
                <div className="form-element">
                    <label>Email:</label>
                    <input name="email" type="text" onBlur={formik.handleBlur}
                    value={formik.values.email} onChange={formik.handleChange} />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : undefined}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormWithThreeFields;