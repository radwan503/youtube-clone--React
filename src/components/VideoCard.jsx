import React from 'react';
import {Link} from 'react-router-dom';
import {Typography,Card,CardContent,CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import {demoThumbnailUrl,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle} from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
           <CardMedia 
           image={snippet?.thumbnails?.high?.url}
           alt={snippet?.title}
           sx={{width:358,height:180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#fff',height:'106px'}}>
            <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#000" wordBreak="break-word">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard