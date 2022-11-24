import React,{useEffect,useState} from 'react';
import {Box,Stack,Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {fetchFromAPI} from '../utils/FetchFromAPI';



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory])



  return (
    <Stack sx={{flexDirection:{sx:'coulmn',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #ddd',px:{sx:0,md:2}}}>
        <Sidebar selectedCategory ={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#909090'}}>
        © 2022 Google LLC
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
         <Typography variant="h4" fontWeight="500" mb={2} sx={{color:'#000'}}>
            {selectedCategory} <span style={{color:'#000'}}>Video</span>
         </Typography>

         <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed