import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import VideoDisplay from './VideoDisplay'
import VideoList from './VideoList'
import axios from 'axios'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { videos: [], selectedVideo: null };
    }

    async onSearchSubmit(term) {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params: {
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyA8qqxdk_NvM66N3Ne-UNVJoK_baPUkA5w',
                q: term
            }
        });

        console.log(response);
        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div>
                <div><SearchBar onSearchSubmit={(term) => this.onSearchSubmit(term)}/></div>
                <div>
                    <div>{this.state.selectedVideo ? <VideoDisplay selectedVideo={this.state.selectedVideo} />: ''}</div>
                    <div><VideoList videos={this.state.videos} 
                    onVideoSelect={(video) => this.setState({ selectedVideo: video })}/></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));