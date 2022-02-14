import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6];

const List = () => {
  return (
    <main>
      <Container maxWidth='md' className='pt-10'>
        <Typography variant='h4' align='center' pb={3} className='font-body'>
          List Game
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className='h-full flex flex-col'>
                <CardMedia
                  image='https://source.unsplash.com/random'
                  sx={{ paddingTop: '40%' }}
                />
                <CardContent className='flex-grow'>
                  <Typography variant='h5' className='font-body'>
                    Heading
                  </Typography>
                  <Typography className='font-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, unde?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant='outlined' size='small'>
                    Play
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default List;
