import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=> {

    const videoItems = props.vd.map((vi) =>{
        return(
            <VideoListItem
                onVidSelect = {props.onVideoSelect}
                key={vi.etag}
                vid ={vi}/>
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );

};

export default VideoList;