import React from 'react'
import nameContext from '../context/nameContext'
import classes from './NameItem.module.css'

class NameItem extends React.Component {
    static contextType = nameContext;

    constructor(props){
        super(props);
    }

    render (){
        console.log(this.context);
        return (
            <nameContext.Consumer>
                {value => <div className={classes.bg}>{this.props.name}-{value}</div>}
            </nameContext.Consumer>
        );
    };
}

export default NameItem;