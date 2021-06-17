import React from 'react'
import Header from './Header'
import Body from './Body'

const App = () => {
    let postSize = "Small";

    return (
        <>
            <Header />
            <Body />
            <select
            id="watchSize"
            className="form-select"
            aria-label="Watch Size"
            >
            {[...new Set([postSize, "Normal", "Big", "Small"])]
            .map((i,idx) => <option selected={idx===1}>{i}</option>)}
        </select>
        </>
    );
};

export default App;