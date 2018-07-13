import React from 'react';

const VideoListItem = (props) => {
    const {video, onVideoSelect} = props;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    // when clicking on this li, pass onVS function the video we're clicking

  return (
    <li onClick={()=>onVideoSelect(video)}className="list-group-item">
        <div className="video">
            <div className="media-left">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="media-object"
                />
            </div>

            <div className="media-body">
                <div className="media-heading">{title}</div>
            </div>

        </div>
    </li>
  )
}

export default VideoListItem;