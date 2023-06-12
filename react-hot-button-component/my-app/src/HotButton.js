import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ className }) {
  const [timesClicked, setTimesClicked] = useState(0);
  function handleClick() {
    setTimesClicked(timesClicked + 1);
  }

  if (timesClicked < 3) {
    className = 'button';
  } else if (timesClicked < 6) {
    className = 'button2';
  } else if (timesClicked < 9) {
    className = 'button3';
  } else if (timesClicked < 12) {
    className = 'button4';
  } else if (timesClicked < 15) {
    className = 'button5';
  } else if (timesClicked < 18) {
    className = 'button6';
  }
  return (
    <button className={className} onClick={handleClick}>
      Hot Button
    </button>
  );
}
