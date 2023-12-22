import { Box, Button, FormControlLabel, InputLabel, Stack, Switch, TextField, Typography } from '@mui/material'
import React from 'react'

const Froms = ({widths}) => {
  return (
    <>
        <Box sx={{
            display: 'inline-block',
            m: 2,
            mt: {md: 0, xs: 2},
            mb: 0,
            width: widths
        }}>
            <Stack sx={{
                mb: '10px'
            }}>
                <Typography variant='h1' component='h2' sx={{
                    color: '#4FD1C5',
                    fontSize: '1.7rem',
                    fontWeight: '600',
                    mb: '5px'
                }}>Welcome Back</Typography>

                <Typography variant='caption' color='grey' sx={{
                    color: '#A0AEC0',
                    fontWeight: '700',
                    fontSize: 14
                }}>Enter your email and password to sign in</Typography>
            </Stack>
           <from className = 'changeHeight'>
    
               <InputLabel shrink htmlFor ='email'>Email</InputLabel>
    
               <TextField sx={{mb: '14px', width: '100%', 
                    ".MuiOutlinedInput-root": {
                        borderRadius: 5
                      },
                    ".MuiInputBase-input": {
                        padding: '12px'
                    }
                }} type='email' id='email' placeholder='your email address'/>
    
               <InputLabel shrink htmlFor ='password'>Password</InputLabel>
    
               <TextField sx={{mb: '14px', width: '100%',
                    ".MuiOutlinedInput-root": {
                        borderRadius: 5
                      },
                    ".MuiInputBase-input": {
                        padding: '12px'
                    }
                }} type='password' id='password' placeholder='your password'/>

                <Stack marginInline={0}>    
                    <FormControlLabel control={<Switch defaultChecked size='small'/>} 
                        label={<Typography variant='caption'>
                            Remember me
                        </Typography>} />

                    <Button sx={{mt: 2, py: '12px', bgcolor: '#4FD1C5',
                        borderRadius: 5
                    }} variant='contained'>SIGN IN</Button>
                </Stack>
    
           </from>
           <Stack sx={{
            textAlign: 'center',
            mt: '12px'
           }}>
            <Typography variant='caption' color='grey' sx={{
            fontWeight: '400',
            fontSize: 14,
            color: '#A0AEC0'
           }}>Don't have an account?
                <Typography component='span' variant='caption' sx={{
                    color: '#4FD1C5',
                    fontWeight: '700',
                    fontSize: 14
                }}>Sign up</Typography>
            </Typography>
           </Stack>
        </Box>
    </>
  )
}

export default Froms