import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function toggleNext() {
    setActiveIndex((activeIndex + 1) % items.length);
  }
  function togglePrev() {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  }
  function toggleIndex(i) {
    setActiveIndex(i);
  }
  return (
    <div>
      <div>{items[activeIndex]}</div>
      <div>
        <CustomButton text="Prev" onCustomClick={togglePrev} />
        <Indicators
          count={items.length}
          liveButton={activeIndex}
          onSelect={toggleIndex}
        />
        <CustomButton text="Next" onCustomClick={toggleNext} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */

function CustomButton({ text, bckColor = 'white', onCustomClick }) {
  return (
    <button onClick={onCustomClick} style={{ backgroundColor: bckColor }}>
      {text}
    </button>
  );
}

// * An array of indicators (buttons).
//  * Props:
//  *   count: The number of indicators to display
//  *
//  * TODO: When an indicator is selected, the active item in the Container
//  *       should switch to the index of the selected indicator.
//  *       To avoid confusion, use `onSelect` for the event prop name.
//  * TODO: Highlight the active indicator lightblue.

function Indicators({ count, onSelect, liveButton }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        key={i}
        text={i}
        onCustomClick={() => onSelect(i)}
        bckColor={liveButton === i ? 'lightblue' : undefined}
      />
    );
  }
  return <div>{buttons}</div>;
}
