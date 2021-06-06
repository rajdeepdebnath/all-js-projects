import React from 'react'
import { connect } from 'react-redux'

const App = () => {
    return(
        <>App</>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(App);