import { useState } from 'react'
import './index.css'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [middleNameError, setMiddleNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleFirstNameChange = e => {
        setFirstNameError(false);
        setFirstName(e.target.value);
        
        if(e.target.value.trim() === '')
            setFirstNameError(true);
    }
    const handleMiddleNameChange = e => {
        setMiddleNameError(false);
        setMiddleName(e.target.value);
        
        if(e.target.value.trim() === '')
            setMiddleNameError(true);
    }
    const handleLastNameChange = e => {
        setLastNameError(false);
        setLastName(e.target.value);
        
        if(e.target.value.trim() === '')
            setLastNameError(true);
    }
    const handleEmailChange = e => {
        setEmailError(false);
        setEmail(e.target.value);
        
        if(e.target.value.trim() === '')
            setEmailError(true);
    }

    const handleSubmitForm = e => {
        e.preventDefault();

        if(validate()){
            console.log({firstName, middleName, lastName,email});
            setFirstName('');
            setMiddleName('');
            setLastName('');
            setEmail('');
            setSubmitSuccess(true);
        }

    }

    const validate = () => {
        if(!firstName.trim())
            setFirstNameError(true);

        if(!middleName.trim())
            setMiddleNameError(true);

        if(!lastName.trim())
            setLastNameError(true);

        if(!email.trim())
            setEmailError(true);

        return firstName.trim() && middleName.trim() 
                && lastName.trim() && email.trim();
    }

    return (
        <form className='form' onSubmit={handleSubmitForm}>
            <div className='form-header center'>Simple Form</div>
            <div className='form-body margin'>
                <div>
                    <label>First Name:</label>
                    <input type="text" className={firstNameError? 'error-input':''} value={firstName} onChange={handleFirstNameChange} autoComplete="off"/>
                    {firstNameError && <div className='error-text'>First name cannot be empty</div>}
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" className={middleNameError?'error-input':''} value={middleName} onChange={handleMiddleNameChange} autoComplete="off"/>
                    {middleNameError && <div className='error-text'>Middle name cannot be empty</div>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" className={lastNameError?'error-input':''} value={lastName} onChange={handleLastNameChange} autoComplete="off"/>
                    {lastNameError && <div className='error-text'>Last name cannot be empty</div>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" className={emailError?'error-input':''} value={email} onChange={handleEmailChange} autoComplete="off"/>
                    {emailError && <div className='error-text'>Email cannot be empty</div>}
                </div>
                <div>
                    <input type="submit"/>
                    {submitSuccess && <div className='success'>Successfully Submitted</div>}
                </div>
            </div>
        </form>
    );
}

export default Form;