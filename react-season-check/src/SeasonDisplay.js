import React, { Fragment } from 'react'

function getSeason(lat, month){
    if(lat === null)
        return <div className="loading">Loading...</div>

    let season;
    if(month > 2 && month < 9){
        season = lat > 0 ? 'summer' : 'winter';
    }
    else{
        season = lat > 0 ? 'winter' : 'summer';
    }
    return <div>Season {season}</div>;
}

class SeasonDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = { lat: null, month: (new Date()).getMonth()};
    }

    componentDidMount(){
        window.navigator.geolocation
        .getCurrentPosition(p => this.setState({ lat: p.coords.latitude }));
    }

    render(){
        return(
            <Fragment>
                {getSeason(this.state.lat, this.state.month)}
            </Fragment>
        );
    }
}

export default SeasonDisplay;