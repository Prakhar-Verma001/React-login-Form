import { Box, Button, FormControl, FormControlLabel, InputLabel, Link, Paper, Stack, Switch, TextField, Typography } from '@mui/material'
import React from 'react'
// import Froms from './From'
import FB from '../assests/Images/facebookFB.png'
import APPLE from '../assests/Images/appleAPPLE.png'
import GOOGLE from '../assests/Images/googleGOOGLE.png'
import './ComponentStyle.css'
const RegisterPage = () => {

    const BoldText={
      fontWeight: 700
    }
  return (
    <div>
      <Box sx={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh'
               }}>
        <Paper sx={{display: '',
                    p: 3,
                    position: 'absolute',
                    width: '300px',
                    borderRadius: 3,
                    boxShadow: 5
                    }}>

          <Typography {...BoldText} variant='body1' sx={{mb: '8px', textAlign: 'center'}}>Welcome with</Typography>
          
          <Stack direction={'row'} spacing={2} sx={{justifyContent: 'center'}}>
            <Button variant='outlined' sx={{py: '14px', borderRadius: 3}}><img src={FB} alt='FB' /></Button>
            <Button variant='outlined' sx={{py: '14px', borderRadius: 3}}><img src={APPLE} alt='APPLE' /></Button>
            <Button variant='outlined' sx={{py: '14px', borderRadius: 3}}><img src={GOOGLE} alt='GOOGLE' /></Button>
          </Stack>
          
          <Typography {...BoldText} variant='body1' sx={{mt: '5px', textAlign: 'center'}}>or</Typography>

           <form>
                <InputLabel shrink htmlFor='name'>Name</InputLabel>
                <TextField sx={{width: '100%', mb: 2, 
                    ".MuiInputBase-input":{p: 1},
                    ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 3}
                  }} id='name' type='text' placeholder='Your name'/>
              
                <InputLabel shrink htmlFor='email'>Email</InputLabel>
                <TextField sx={{width: '100%', mb: 2,
                      ".MuiInputBase-input":{p: 1},
                      ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 3}
                  }} id='email' type='email' placeholder='Your Email'/>

                <InputLabel shrink htmlFor='password'>Password</InputLabel>
                <TextField sx={{width: '100%',
                      ".MuiInputBase-input":{p: 1},
                      ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 3}
                  }} id='password' type='password' placeholder='Your Password'/>
                
                <FormControlLabel sx={{width: '100%', mb: 1}} control={<Switch defaultChecked />} label='Remember me'/>
                <Button sx={{width: '100%',
                    borderRadius: 3, mb: '1px'
                  }} variant='contained' type='submit'>Sign Up</Button>

                <Typography sx={{textAlign: 'center', mt: 1}} variant='subtitle2'>Already have an account? 
                <Link variant='subtitle2' href='#' underline='hover'> Sign In</Link></Typography>
           </form>         
        </Paper>
      </Box> 
    </div>
  )
}

export default RegisterPage