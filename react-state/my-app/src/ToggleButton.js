import { useState } from 'react';

export default function ToggleButton({ text, color, textTwo, colorTwo }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('use state', isClicked);
  function handleClick() {
    console.log('value BEFORE calling the setter', isClicked);
    setIsClicked(!isClicked);
    console.log('value AFTER calling the setter', isClicked);
  }
  if (!isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} style={{ backgroundColor: colorTwo }}>
        {textTwo}
      </button>
    );
  }
}
