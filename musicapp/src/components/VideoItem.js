import React from 'react';

import { Grid , Paper, Typography} from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) =>
{
    return(
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItem: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography style={{backgroundColor:'#393939',color:'#e91e63',paddingLeft:'10px', fontFamily:'Lato Regular'}} variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;