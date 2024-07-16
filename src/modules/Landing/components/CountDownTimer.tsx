import * as React from 'react';
import { useTimer } from 'react-timer-hook';
import clockIcon from '../../../assets/images/clock.png';

interface CountDownTimerProps {
  expiryTimestamp: Date;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      const time = new Date();
      restart(time);
    },
  });

  return (
    <div className="d-flex gap-1 justify-content-start align-items-center fs-9">
      <img src={clockIcon} className="icon object-fit-cover" />
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default CountDownTimer;
