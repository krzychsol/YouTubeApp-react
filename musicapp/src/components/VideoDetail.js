import React from 'react';
import {Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    console.log(video);

    return(
        <>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding: '15px',backgroundColor:'#393939'}}>
                <Typography style={{backgroundColor:'#393939',color:'#e91e63',paddingLeft:'10px', fontFamily:'Lato Regular'}} variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography style={{backgroundColor:'#393939',color:'#e91e63',paddingLeft:'10px', fontFamily:'Lato Regular'}} variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography style={{backgroundColor:'#393939',color:'#e91e63',paddingLeft:'10px', fontFamily:'Lato Regular'}} variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    );
}

export default VideoDetail;