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
import Modal from '../../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../redux/actions/users';

const List = () => {
  const modal = useSelector((state) => state.users.modal);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(showModal());
  };
  return (
    <main>
      {modal && <Modal />}

      <Container maxWidth='md' className='pt-10'>
        <Typography variant='h4' align='center' pb={3} className='font-body'>
          List Game
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game1.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Rock Paper Scissor
                </Typography>
                <Typography className='font-body'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href='/game'
                  variant='outlined'
                  size='small'
                  onClick={handleOnClick}
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game2.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Super Mario Car
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
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game3.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Assassin Creed
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
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game4.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Squid Game
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
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game5.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Bom Car
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
          <Grid item xs={12} sm={6} md={4}>
            <Card className='h-full flex flex-col'>
              <CardMedia
                image='./images/game6.png'
                sx={{ paddingTop: '60%' }}
              />
              <CardContent className='flex-grow'>
                <Typography variant='h5' className='font-body'>
                  Kena Bridge of spirits
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
        </Grid>
      </Container>
    </main>
  );
};

export default List;
