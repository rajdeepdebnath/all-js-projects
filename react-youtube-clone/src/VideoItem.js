import React from 'react'

const VideoItem = (props) => {
    return (
        <div className="item" onClick={() => props.onVideoSelect(props.video)}>
            <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.default.url} />
            <div>
                {props.video.snippet.title}
            </div>
        </div>
    );
}

export default VideoItem;