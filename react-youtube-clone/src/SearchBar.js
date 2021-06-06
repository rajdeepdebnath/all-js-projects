import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <form onSubmit={(e) => {e.preventDefault();this.props.onSearchSubmit(this.state.term);}}>
                <input type="text" value={this.state.term} 
                onChange={(e) => this.setState({ term: e.target.value })} />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default SearchBar;