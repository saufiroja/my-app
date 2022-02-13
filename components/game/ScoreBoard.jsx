import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScoreFromLocalStorage } from "../../redux/actions/game";

const ScoreBoard = () => {
  const [scoreEffect, setScoreEffect] = useState("");
  const { score, result } = useSelector((state) => state.game);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setScoreFromLocalStorage(score));
    console.log('scoreboard: ', score);
  }, [dispatch, score]);

  // useEffect(() => {
  //   const myProfile = JSON.parse(localStorage.getItem('data'))
  //   const data  = myProfile.data.data
  //   const newData = {
  //     score: score,
  //     id: data.id
  //   };
  //   console.log('newData score:', newData);
  //   axios
  //     .put(`https://impostorteam-app.herokuapp.com/api/users/score/${newData.id}`, newData)
  //     .then((res) => {
  //       localStorage.setItem('data', JSON.stringify(res))
  //       console.log('res score:', res);
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err);
  //     });
  // }, [score])

  return (
    <div
      className={`bg-transparent border-2 border-sky-500 flex flex-col items-center justify-center px-5 py-2 md:px-8 rounded-md transition ${scoreEffect} `}
    >
      <small className="text-neutral-score uppercase text-[10px] md:text-sm font-bold">
        score
      </small>
      <big className="text-neutral-dark text-4xl md:text-5xl font-bold -mt-1">
        {score}
      </big>
    </div>
  );
};

export default ScoreBoard;
