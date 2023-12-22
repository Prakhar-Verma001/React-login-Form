import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
// import Img1 from '../assests/logo-creative-tim-blackPurity.png'
import Img2 from '../assests/IconDashCube.png'
import Img3 from '../assests/IconTabPeople.png'
import Img4 from '../assests/IconAuther.png'
import Img5 from '../assests/VectorKey.png'

const Navigate = ({buttonColor, textColor, backColor, shedows, filters, pics}) => {
    const Styling = {
        fontWeight: 700,
        // color: 'black'
        color: textColor
    }

    const DisplayFlex = {
        display: 'flex',
        alignItems: 'center'
    }
  return (
    <div>
        {/* <AppBar color='transparent' sx={{position: 'relative'}}> */}
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                width: {md: '70%', xs: '80%'}, 
                flexWrap: 'nowrap', 
                p: '12px',
                position: 'absolute',
                mt: 3, 
                borderRadius: 4, 
                alignItems: 'center', 
                gap: {xs: 2, md: 3}, 
                // bgcolor: 'rgba(255, 255, 255, 0.8)', 
                // bgcolor: 'transparent',
                bgcolor: backColor, 
                // boxShadow: '5', 
                boxShadow: shedows, 
                // backdropFilter: 'blur(6px)'
                backdropFilter: filters
                }}>
                  
                 <Grid item md={6} xs={4} sx={{pl: 1, alignItems: 'center'}}>
                    <Button type='url' sx={{p: 0, alignSelf: 'center'}}>
                        <Stack {...DisplayFlex} direction='row' spacing={{md: 1, xs: 0}} >  
                            <Box {...DisplayFlex} sx={{ width: {md: '10%', xs: '24%'}}}>
                                <img src={pics} alt='icon' width='100%'/>
                            </Box>
                            {/* <img src={Img1} alt='icon' height='15px' width='15px'/> */}
                            <Typography {...Styling} component='subtitle2' 
                            sx={{fontSize: {md: '0.8rem', xs: '0.7rem'},
                                // m: {md: 1, xs: 0}
                            }}>  
                                PURITY UI DASHBOARD
                            </Typography> 
                        </Stack>
                    </Button>
                 </Grid>

                 <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}>
                     <Button type='url' sx={{p: 0}}>
                        <Stack {...DisplayFlex} direction='row' spacing='5px'>
                            <img src={Img2} alt='icon' height='11px' width='11px'/>    
                            <Typography {...Styling} component='subtitle2'sx={{fontSize: '0.6rem'}}>
                               DASHBOARD
                            </Typography>
                        </Stack>
                    </Button>
                 </Grid>

                 <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}>
                 <Button type='url' sx={{p: 0}}>
                        <Stack direction='row' spacing='5px'>
                            <img src={Img3} alt='icon' height='11px' width='11px'/>    
                            <Typography {...Styling} component='subtitle2'sx={{fontSize: '0.6rem'}}>
                                PEOPLE
                            </Typography>
                        </Stack>
                    </Button>
                 </Grid>

                 <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}> 
                 <Button type='url' sx={{p: 0}}>
                        <Stack {...DisplayFlex} direction='row' spacing='5px'>
                            <img src={Img4} alt='icon' height='11px' width='11px'/>    
                            <Typography {...Styling} component='subtitle2'sx={{fontSize: '0.6rem'}}>
                               SIGN IN
                            </Typography>
                        </Stack>
                    </Button>
                 </Grid>

                 <Grid item md={2} sx={{p: 1, textAlign: 'center', display: {xs: 'none', lg: 'grid'}}}>
                 <Button type='url' sx={{p: 0}}>
                        <Stack {...DisplayFlex} direction='row' spacing='5px'>
                            <img src={Img5} alt='icon' height='11px' width='11px'/>    
                            <Typography {...Styling} component='subtitle2'sx={{fontSize: '0.6rem'}}>
                               SIGN UP
                            </Typography>
                        </Stack>
                    </Button>
                 </Grid>

                 <Grid item md={6} xs={4} sx={{textAlign: 'end',
                    pr:{ md: '10px', xs: 0}
                    }}>
                     <Button sx={{px: '40px', py: '8px', 
                     border: '1px solid black', 
                     borderRadius: '40px',
                     background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'
                     }}>
                         <Typography {...Styling} component='subtitle2'
                            sx={{fontSize: '0.6rem', 
                            // color:'#FFFFFF'
                            color: buttonColor
                        }}>
                                Free Download
                        </Typography>
                     </Button>
                 </Grid>
                
            </Grid>

        </Box>
        {/* </AppBar> */}
    </div>
  )
}

export default Navigate
