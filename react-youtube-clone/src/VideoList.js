import React from 'react'
import VideoItem from './VideoItem'


const VideoList = (props) => {
    return ( 
        <div>
            {props.videos.map(v => <VideoItem key={v.id.videoId} video={v} 
            onVideoSelect={(v) => props.onVideoSelect(v)}/>)}
        </div>
    );
}

export default VideoList;