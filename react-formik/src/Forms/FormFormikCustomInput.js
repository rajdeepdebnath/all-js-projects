import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../UI/MyTextInput';

const validationSchema = Yup.object({
    firstname:Yup.string().required('First Name required'),
    lastname:Yup.string().required('Last name required'),
    email:Yup.string().email('Invalid email format').required('Email required')
});

const FormFormikContext = () => {
    return (
        <div className="form">
            <header>Form Formik custom input</header>
            <Formik
                initialValues={{ firstname:'', lastname:'', email:'' }} 
                validationSchema = {validationSchema} 
                onSubmit={values => console.log(values)}
            >
                <Form className="form-body">
                    <MyTextInput label="First name" name="firstname" />
                    <MyTextInput label="Last name" name="lastname" />
                    <MyTextInput label="Email" name="email" />
                    <input type="submit" value="Submit" />
                </Form>
            </Formik>
        </div>
    );
}

export default FormFormikContext;