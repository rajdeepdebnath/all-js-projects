import { useState, useCallback } from 'react'

import Input from "./Input";

const ComponentForm = () => {
    const [firstName, setFirstNameData] = useState('');
    const [middleName, setMiddleNameData] = useState('');
    const [lastName, setLastNameData] = useState('');
    const [email, setEmailData] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [middleNameError, setMiddleNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    let formIsError = firstNameError || middleNameError || lastNameError || emailError;
    

    const handleFirstNameChange = useCallback((val, isError, isTouched) => {
        setFirstNameData(val);
        setFirstNameError(isError);
        setIsTouched(isTouched);
    },[]);
    const handleMiddleNameChange = useCallback((val, isError, isTouched) => {
        setMiddleNameData(val);
        setMiddleNameError(isError);
        setIsTouched(isTouched);
    },[]);
    const handleLastNameChange = useCallback((val, isError, isTouched) => {
        setLastNameData(val);
        setLastNameError(isError);
        setIsTouched(isTouched);
    },[]);
    const handleEmailChange = useCallback((val, isError, isTouched) => {
        setEmailData(val);
        setEmailError(isError);
        setIsTouched(isTouched);
    },[]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log({firstName,middleName,lastName,email});
    }

    return (
        <form className="form" onSubmit={handleSubmitForm}>
        <div className="form-header center">Component Form</div>
        <div className="form-body margin">
            <Input label="First name" handleValueChange={handleFirstNameChange} />
            <Input label="Middle name" handleValueChange={handleMiddleNameChange} />
            <Input label="Last name" handleValueChange={handleLastNameChange} />
            <Input label="Email" handleValueChange={handleEmailChange} />
            <input type="submit" disabled={!isTouched || formIsError} />
        </div>
        </form>
    );
};

export default ComponentForm;
