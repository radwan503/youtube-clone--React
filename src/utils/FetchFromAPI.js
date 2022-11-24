import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
      maxResults: '50'
    },
    headers: {
      //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': '2f6bf114b8msh00bb3f1b317737dp1a2729jsna070df4af051',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromAPI = async(url) =>{
   const {data} = await axios.get(`${BASE_URL}/${url}`,options);

   return data;
  } 