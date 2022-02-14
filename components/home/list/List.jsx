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

const cards = [1, 2, 3, 4, 5, 6];

const List = () => {
  const modal = useSelector(state => state.users.modal)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(
      showModal()
    )
  }
  return (
    <main>
      {
        modal && (
          <Modal />
        )
      }

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
                  <Button variant='outlined' size='small' onClick={handleOnClick}>
                    Play
                  </Button>
                  <button className='disable px-2 py-1 rounded-sm border-gray-400 bg-gray-400 text-white'>
                    Pernah Dimainkan
                  </button>
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
