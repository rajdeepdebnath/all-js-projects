import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageCard from './ImageCard'
import './index.css'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { images : [], term : ''};
    }

    async onSearch(term){
        console.log(term);
        this.setState({ term });
        if(this.state.term)
        {
            let response = await axios.get("https://api.unsplash.com/search/photos", {
                params: { query: this.state.term},
                headers: {
                    Authorization: 'Client-ID bM5uAQuoUvFg9qqkpWxwavxyqZL1mIZSJrPELLu7JCo'
                }
            });

            //console.log(response?.data.results);
            this.setState({ images: response?.data.results ?? [] });
        }
    }

    render(){ 
        return(
            <div>
                <SearchBar onSearch={(term) => this.onSearch(term)} />
                <ImageCard images={this.state.images} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));