import { useState, useCallback, useReducer } from 'react'
import Input from "./Input";

const reducer = (state,action) => {
    if(action.type === 'data')
        return { ...state, data:{ ...state.data, ...action.payload } }
    else if(action.type === 'error')
        return { ...state, error:{ ...state.error, ...action.payload } }
    else
        return state;
};

const ComponentForm = () => {
    const [state, dispatch] = useReducer(reducer, {});
    const [isTouched, setIsTouched] = useState(false);
    

    const handleFirstNameChange = useCallback((val, isError, isTouched) => {
        dispatch({ type:'data', payload:{'firstName':val}});
        dispatch({ type:'error', payload:{'firstNameError':isError}});
        setIsTouched(isTouched);
    },[]);
    const handleMiddleNameChange = useCallback((val, isError, isTouched) => {
        dispatch({ type:'data', payload:{'middleName':val}});
        dispatch({ type:'error', payload:{'middleNameError':isError}});
        setIsTouched(isTouched);
    },[]);
    const handleLastNameChange = useCallback((val, isError, isTouched) => {
        dispatch({ type:'data', payload:{'lastName':val}});
        dispatch({ type:'error', payload:{'lastNameError':isError}});
        setIsTouched(isTouched);
    },[]);
    const handleEmailChange = useCallback((val, isError, isTouched) => {
        dispatch({ type:'data', payload:{'email':val}});
        dispatch({ type:'error', payload:{'emailError':isError}});
        setIsTouched(isTouched);
    },[]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <form className="form" onSubmit={handleSubmitForm}>
        <div className="form-header center">Component Form (useReducer)</div>
        <div className="form-body margin">
            <Input label="First name" handleValueChange={handleFirstNameChange} />
            <Input label="Middle name" handleValueChange={handleMiddleNameChange} />
            <Input label="Last name" handleValueChange={handleLastNameChange} />
            <Input label="Email" handleValueChange={handleEmailChange} />
            <input type="submit" disabled={!isTouched || Object.values(state.error).find(e => e)} />
        </div>
        </form>
    );
};

export default ComponentForm;
