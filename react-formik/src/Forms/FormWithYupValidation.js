import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstname:Yup.string().required('First Name required'),
    lastname:Yup.string().required('Last name required'),
    email:Yup.string().email('Invalid email format').required('Email required')
});

const FormWithYupValidation = () => {
    const formik = useFormik({
        initialValues:{ firstname:'', lastname:'', email:'' },
        validationSchema,
        onSubmit: values => console.log(values)
    });

    return (
        <div className="form">
            <header>Form with Yup validation</header>
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

export default FormWithYupValidation;