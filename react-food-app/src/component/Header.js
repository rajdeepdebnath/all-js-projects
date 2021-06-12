import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../action/cartAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import classes from './Header.module.css'
import CardDetails from './CartDetails'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = { menuopen:false };
    }

    componentDidMount(){
        this.props.fetchCart();
    }

    render(){
        return (
            <div className={classes.header}>
                <div className={classes.logo}>Food App</div>
                <div className={classes.cart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {this.props.cart?.menus?.length && <div onClick={() => this.setState({menuopen:!this.state.menuopen})} className={classes.cartlength}>{this.props.cart.menus.length}</div>}
                </div>
                {this.state.menuopen && <CardDetails setMenuOpen={v => this.setState({ menuopen:v })}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart:state.cart};
}

export default connect(mapStateToProps, { fetchCart })(Header);