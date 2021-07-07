import { useState } from 'react'
import Button from './Button'
import Search from './Search'

const App = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCounter(counter+1);
        }, 3000);
    }

    return (
        <>
            <Button />
            <Search />
            <div>counter:<span data-testid="counter">{counter}</span></div>
            <button data-testid="increase" onClick={handleClick}>Increase</button>
            <button data-testid="decrease" onClick={() => setCounter(counter-1)}>Decrease</button>
        </>
    );
}

export default App;