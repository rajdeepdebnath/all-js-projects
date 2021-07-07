import { useState } from 'react'


const Button = () => {
    const [value, setValue] = useState('Click Me')

    return (
        <button onClick={() => setValue('Clicked')}>
            {value}
        </button>
    );
}

export default Button;