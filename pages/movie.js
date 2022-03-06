// import React from "react"
// import Video from "../components/Video"

// const Movie = () => {
//     return (
//         <div>
//             <h1>Media Handling Video</h1>
//             <Video />
//         </div>
//     )
// }

// export default Movie;

import React, { useState } from 'react';
import ResponsiveVideo from '../components/ResponsiveVideo';

function Movie() {
  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }) => {
    // console.log(played);
    if (played >= 0.7 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div>
      <ResponsiveVideo
        url="https://www.youtube.com/watch?v=M8rbVzVf_z0"
        onProgress={handleWatchComplete}
      />
      <div className={watchComplete ? 'marker marker--is--complete' : 'marker marker--not--complete'}>
        Completed
      </div>
    </div>
  );
}

export default Movie;
