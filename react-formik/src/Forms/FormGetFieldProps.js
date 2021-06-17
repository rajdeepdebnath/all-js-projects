import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstname:Yup.string().required('First Name required'),
    lastname:Yup.string().required('Last name required'),
    email:Yup.string().email('Invalid email format').required('Email required')
});

const FormGetFieldProps = () => {
    const formik = useFormik({
        initialValues:{ firstname:'', lastname:'', email:'' },
        validationSchema,
        onSubmit: values => console.log(values)
    });

    return (
        <div className="form">
            <header>Form getFieldProps</header>
            <form className="form-body" onSubmit={formik.handleSubmit}>
                <div className="form-element">
                    <label>First name:</label>
                    <input type="text" {...formik.getFieldProps('firstname')} />
                    {formik.touched.firstname && formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : undefined}
                </div>
                <div className="form-element">
                    <label>Last name:</label>
                    <input type="text"  {...formik.getFieldProps('lastname')} />
                    {formik.touched.lastname && formik.errors.lastname ? <div className="error">{formik.errors.lastname}</div> : undefined}
                </div>
                <div className="form-element">
                    <label>Email:</label>
                    <input type="text"  {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : undefined}
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormGetFieldProps;