import React, { useState } from 'react';

const Squarefoot = () => {
  const [totalSqft] = useState(650);
  // const [goalDay] = useState(650);
  // 650 mandatory, 750 goal
  const [minWeek] = useState(650);
  const [goalWeek] = useState(750);
  // const [goalMonth] = useState();

  let progressColor;
  if (totalSqft >= goalWeek) {
    progressColor = 'rgb(200, 240, 200)';
  } else if (totalSqft >= minWeek && totalSqft < goalWeek) {
    progressColor = 'rgb(240, 240, 200)';
  } else if (totalSqft > 0 && totalSqft < minWeek) {
    progressColor = 'rgb(240, 100, 100)';
  } else {
    progressColor = 'white';
  }

  let styles = {
    // display: 'inline-block',
    backgroundColor: progressColor,
    border: '1px solid #DDD',
    borderRadius: '6px',
  };

  return (
    <div className='squarefoot' style={styles}>
      Squarefoot: {totalSqft}/{goalWeek}
    </div>
  );
};

export default Squarefoot;
