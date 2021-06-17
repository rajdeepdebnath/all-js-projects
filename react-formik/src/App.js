import React from 'react'
import SimpleForm from './Forms/SimpleForm'
import FormWithThreeFields from './Forms/FormWithThreeFields'
import FormWithYupValidation from './Forms/FormWithYupValidation'
import FormGetFieldProps from './Forms/FormGetFieldProps'
import FormFormikContext from './Forms/FormFormikContext'
import FormFormikCustomInput from './Forms/FormFormikCustomInput'

const App = () => {

    return (
        <>
            <header>Formik</header>
            <section className="container">
                <FormFormikCustomInput />
                <FormFormikContext />
                <FormGetFieldProps />
                <FormWithYupValidation />
                <FormWithThreeFields />
                <SimpleForm />
            </section>
        </>
    );
}

export default App;