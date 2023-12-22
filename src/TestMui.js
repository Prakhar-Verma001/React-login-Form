import React from 'react'
import { Stack, Typography } from '@mui/material'
const testMui = () => {
  return (
    <div>
      <Typography variant='h4'>
        Hello React!!!
      </Typography>
      <Stack>
        <Typography color='InactiveCaptionText' fontSize={24} variant = 'h1'>
          Hello Typography!!
        </Typography>
      </Stack>
    </div>
  )
}

export default testMui