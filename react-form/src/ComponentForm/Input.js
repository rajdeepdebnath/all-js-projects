import { useState, useEffect } from 'react'
import classes from './Input.module.css'


const Input = ({ label, handleValueChange }) => {
    const [value, setValue] = useState('')
    const [valueError, setValueError] = useState(false)
    const [formIsTouched, setFormIsTouched] = useState(false)

    const handleInputChange = (e) => {
        setFormIsTouched(true);
        setValue(e.target.value);
        setValueError(!e.target.value.trim());
    }

    useEffect(() => {
        handleValueChange(value, valueError, formIsTouched);
    }, [value,formIsTouched,valueError]);

    return (
        <div>
            <label>{label}:</label>
            <input type="text" className={valueError?classes['error-input']:''} 
            value={value} onChange={handleInputChange} onBlur={handleInputChange} autoComplete="off"/>
            {valueError && <div className={classes['error-text']}>{label} cannot be empty</div>}
        </div>
    );
}

export default Input;