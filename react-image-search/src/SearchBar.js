import React from 'react'

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.term} 
                onChange={(e) => this.setState({ term:e.target.value })} />
                <button onClick={() => this.props.onSearch(this.state.term)}>Search</button>
            </div>
        );
    }
};

export default SearchBar;