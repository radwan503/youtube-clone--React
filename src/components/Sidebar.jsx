import React from 'react';
import {Stack} from '@mui/material';
import {categories} from '../utils/constants';


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack 
    direction="row"
    sx={{overflowY:"auto",
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column'},
    }}>
  
       {categories.map((category)=>( 
           <button className='category-btn'
           onClick={()=>setSelectedCategory(category.name)}
           style={{background:category.name === selectedCategory && '#F2F2F2',color:'#000'}} key={category.name}>
            <span style={{fontWeight:category.name === 'selectedCategory' ? '700':'300',marginRight:'15px' }}>{category.icon}</span>
            <span style={{fontWeight:category.name === 'selectedCategory' ? '700':'300'}}>{category.name}</span>
           </button>
       ))}
    </Stack>
  )


export default Sidebar