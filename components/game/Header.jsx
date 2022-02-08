import React from "react";
import ScoreBoard from "./ScoreBoard";

const Header = () => {
  return (
    <header className="self-stretch flex items-center md:items-stretch justify-between rounded-xl p-3 md:p-6 ring-2 ring-neutral-header md:mb-20">
      <div className="-mb-1">
        Rock <br />
        Paper <br />
        Scissors
      </div>
      <ScoreBoard />
    </header>
  );
};

export default Header;
