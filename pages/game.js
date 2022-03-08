import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { playedGame1 } from '../redux/actions/game';

function Game() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    router.push('/home');
    dispatch(
      playedGame1(),
    );
  };

  return (
    <div className="bg-slate-800">
      <button onClick={handleOnClick}>
        <a className="text-blue-600 p-2">
          <ArrowBack />
        </a>
      </button>
      <div className="mx-auto max-w-2xl min-h-screen text-white p-7 md:py-10 flex flex-col justify-between md:justify-start items-center">
        <Header />
        <GameBoard />
      </div>
    </div>
  );
}

export default Game;
