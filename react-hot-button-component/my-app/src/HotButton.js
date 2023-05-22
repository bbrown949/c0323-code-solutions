import { useState } from 'react';
import './HotButton.css';

export default function HotButton({ className }) {
  const [timesClicked, setTimesClicked] = useState(0);
  function handleClick() {
    setTimesClicked(timesClicked + 1);
  }

  if (timesClicked < 3) {
    className = 'buttonOne';
  } else if (timesClicked < 6) {
    className = 'buttonTwo';
  } else if (timesClicked < 9) {
    className = 'buttonThree';
  } else if (timesClicked < 12) {
    className = 'buttonFour';
  } else if (timesClicked < 15) {
    className = 'buttonFive';
  } else if (timesClicked < 18) {
    className = 'buttonSix';
  }
  return (
    <button className={className} onClick={handleClick}>
      Hot Button
    </button>
  );
}
