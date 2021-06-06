import React from 'react'

const VideoDisplay = (props) => {
    return (
        <iframe width="727" height="409" src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} 
        title={props.selectedVideo.snippet.title} frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    );
}

export default VideoDisplay;