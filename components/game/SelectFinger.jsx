import React from 'react';
import IconPaper from '../../assets/images/icon-paper.svg';
import IconRock from '../../assets/images/icon-rock.svg';
import IconScissors from '../../assets/images/icon-scissors.svg';

function SelectFinger({ finger, className, ...props }) {
  const bg = finger === 'paper'
    ? 'bg-paper'
    : finger === 'rock'
      ? 'bg-rock'
      : finger === 'scissors'
        ? 'bg-scissors'
        : 'bg-transparent';

  return (
    <div
      className={`p-3 md:p-4 rounded-full w-max border-b-4 border-gray-800 border-opacity-20 ${bg} ${className}`}
      {...props}
    >
      <div
        className={`
          ${finger ? 'bg-slate-800' : 'bg-neutral-dark'}
          p-3 rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center 
          ${finger && 'border-t-4 border-b-4 border-2 border-sky-500'}
          justify-center
        `}
      >
        {finger === 'paper' ? (
          <IconPaper />
        ) : finger === 'rock' ? (
          <IconRock />
        ) : finger === 'scissors' ? (
          <IconScissors />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default SelectFinger;
