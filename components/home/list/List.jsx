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
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Modal from '../../Modal';
import { showModal } from '../../../redux/actions/users';
import { playedGame1 } from '../../../redux/actions/game';
import { LastPlayed } from '../LastPlayed';

function List(props) {
  const router = useRouter();
  const {
    showModal, playedGame1, modal, played1, played2, played3, played4, played5, played6,
  } = props;
  const handleOnClick = () => {
    showModal();
  };

  const handlePlayGame = () => {
    router.push('/game');
    setTimeout(() => {
      playedGame1();
    }, 10000);
  };
  return (
    <main>
      {modal && <Modal />}

      <Container maxWidth="md" className="pt-10">
        <Typography variant="h4" align="center" pb={3} className="font-body">
          List Game
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game1.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played1 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Rock Paper Scissor
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  // href='/game'
                  variant="outlined"
                  size="small"
                  onClick={handlePlayGame}
                >
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game2.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played2 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Super Mario Car
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleOnClick}>
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game3.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played3 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Assassin Creed
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleOnClick}>
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game4.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played4 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Squid Game
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleOnClick}>
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game5.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played5 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Bom Car
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleOnClick}>
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="h-full flex flex-col">
              <div className="relative">
                <CardMedia
                  image="./images/game6.png"
                  sx={{ paddingTop: '60%' }}
                />
                {
                  played6 && (
                    <LastPlayed />
                  )
                }
              </div>
              <CardContent className="flex-grow">
                <Typography variant="h5" className="font-body">
                  Kena Bridge of spirits
                </Typography>
                <Typography className="font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, unde?
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={handleOnClick}>
                  Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

const mapStateToProps = (state) => ({
  modal: state.users.modal,
  played1: state.game.played1,
  played2: state.game.played2,
  played3: state.game.played3,
  played4: state.game.played4,
  played5: state.game.played5,
  played6: state.game.played6,
});

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModal()),
  playedGame1: () => dispatch(playedGame1()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
