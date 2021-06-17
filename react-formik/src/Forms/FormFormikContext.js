import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstname:Yup.string().required('First Name required'),
    lastname:Yup.string().required('Last name required'),
    email:Yup.string().email('Invalid email format').required('Email required')
});

const FormFormikContext = () => {
    return (
        <div className="form">
            <header>Form Formik Context</header>
            <Formik
                initialValues={{ firstname:'', lastname:'', email:'' }} 
                validationSchema = {validationSchema} 
                onSubmit={values => console.log(values)}
            >
                <Form className="form-body">
                    <div className="form-element">
                        <label>First name:</label>
                        <Field type="text" name="firstname" />
                        <ErrorMessage name="firstname" className="error" />
                    </div>
                    <div className="form-element">
                        <label>Last name:</label>
                        <Field type="text" name="lastname" />
                        <ErrorMessage name="lastname" className="error" />
                    </div>
                    <div className="form-element">
                        <label>Email:</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" className="error" />
                    </div>
                    <input type="submit" value="Submit" />
                </Form>
            </Formik>
        </div>
    );
}

export default FormFormikContext;