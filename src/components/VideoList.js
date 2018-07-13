import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const {videos} = props;
    console.log(videos);

    //map over videos array, make a vidItem for each video
    const videoItems = videos.map(video=> (
        <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.id.videoId} 
            video={video} 
        />
    ))
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}


export default VideoList;