import { useState } from 'react'


const Search = () => {
    const [value, setValue] = useState('')

    return(
        <>
            <input onChange={e => setValue(e.target.value)} />
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>  
            </ul>
            <select vlaue="Green">
                <option>Green</option>
                <option>Orange</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Violet</option>
                <option>Periwinkle</option>
            </select>
        </>
    );
}

export default Search;