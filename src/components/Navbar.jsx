import React from 'react';
import {Stack,MenuItem,Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';
import Avatar from '@mui/material/Avatar';


const Navbar = () => (


    <Stack direction="row" alignItems="center" p={1} sx={{position:'sticky',background:'#fff',top:0, justifyContent:'space-between',borderBottom:'1px solid #ddd'}}>
       <Link to="/" style={{display:'flex',alignItems:'center'}}>
            <img src={logo} alt="logo" height={20}/>
      </Link>
      <SearchBar/>

      <MenuItem>
          <Typography textAlign="center"><Avatar></Avatar></Typography>
      </MenuItem>
    </Stack>
  )

export default Navbar