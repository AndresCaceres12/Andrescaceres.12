import React, { useState, useEffect } from 'react';

const CountdownComponent = ({ date }) => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(date);
    const differenceInTime = targetDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    setDaysLeft(differenceInDays);
  }, [date]);

  return (
    <div>
      <p>Días restantes: {daysLeft}</p>
    </div>
  );
};

export default CountdownComponent;
