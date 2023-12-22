import React from 'react'
import ChakraImg from '../assests/ImageImage.png'
import { Box } from '@mui/material'
import Froms from './From'

const Chakra = () => {

  return (
    <div>
        <Box sx={{display: 'flex',
                justifyContent: 'end',
                width: '100%',
                flexDirection: {lg: 'row', xs: 'column-reverse'}
            }}>
            <Box sx={{alignSelf: 'end', 
            display: 'flex', justifyContent: 'center',
            width: '100%',
            mb: {lg: 2, xs: 0}
                }}>
                    <Froms widths='300px'/>
                </Box>
             <Box sx={{
                width: {lg: '62%', xs: '100%'},
                mr: '-20px'
             }}> 
                <img src={ChakraImg} alt='chakra' width='100%'/>
             </Box>   
               
        </Box>
    </div>
  )
}

export default Chakra