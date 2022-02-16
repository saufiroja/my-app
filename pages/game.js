import Header from '../components/game/Header';
import GameBoard from '../components/game/GameBoard';
import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';

const Game = () => {
  return (
    <div className='bg-slate-800'>
      <Button href='/home'>
        <ArrowBack />
      </Button>
      <div className='mx-auto max-w-2xl min-h-screen text-white p-7 md:py-10 flex flex-col justify-between md:justify-start items-center'>
        <Header />
        <GameBoard />
      </div>
    </div>
  );
};

export default Game;
