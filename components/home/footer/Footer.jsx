import React from 'react';

import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';

const Footer = () => {
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth='md'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5' className='font-body' pb={2}>
              Impostor
            </Typography>
            <Typography className='font-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              veritatis debitis, reprehenderit doloremque aspernatur modi unde
              ut cupiditate quasi consequuntur.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Contributor</Box>
            <Box>
              <Typography role="paragraf" className='font-body' pb={1} pt={1}>
                Bogiant
              </Typography>
            </Box>
            <Box>
              <Typography className='font-body' pb={1} pt={1}>
                Fikri
              </Typography>
            </Box>
            <Box>
              <Typography className='font-body' pb={1} pt={1}>
                Hasby
              </Typography>
            </Box>
            <Box>
              <Typography className='font-body' pb={1} pt={1}>
                Oja
              </Typography>
            </Box>
            <Box>
              <Typography className='font-body' pb={1} pt={1}>
                Ulfa
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Sletter</Box>
            <Typography className='font-body' pb={1} pt={1}>
              Enter Email Address
            </Typography>
            <Box pt={1}>
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                sx={{ width: '100%' }}
              />
            </Box>
            <Box pt={2}>
              <Button
                size='small'
                variant='outlined'
                className='font-body'
                sx={{ width: '100%' }}
              >
                Subscriber
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box
          className='font-body'
          textAlign='center'
          pt={{ xs: 5, sm: 10 }}
          pb={{ xs: 5, sm: 0 }}
        >
          &reg;{new Date().getFullYear()} Impostor Team. All Rights Reserved
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
